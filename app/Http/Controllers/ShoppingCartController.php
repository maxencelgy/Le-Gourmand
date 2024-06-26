<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\DiscountCode;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShoppingCartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user(); //auth()->user()->with('shopping_cart');
        $boissons = Product::where('category_id', Category::where('slug', 'boissons')->first()->id)->get();
        return Inertia::render('shopping_cart/ShoppingCart', [
            'products' => ProductResource::collection($user->shopping_cart),
            'boissons' => $boissons,
            'meta' => $user->shopping_cart_total
        ]);
    }

    //
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'id' => 'required|exists:products',
            'quantity' => "required|numeric|min:1",
        ]);

        $user = Auth::user(); //auth()->user()->with('shopping_cart');
        $product = Product::findOrFail($request->id);

        $is_new_product = $user->shopping_cart->where('id', $request->id)->isEmpty();
        $count_product = $user->shopping_cart->count();
        if ($is_new_product && $count_product >= 10) {
            return Redirect::back()
                ->withErrors(['limit' => 'El limite del carrito es de 10 produits']);
        }

        if ($product->stock < $request->quantity) {
            return Redirect::route('shopping-cart.index')
                ->withErrors(['stock' => 'No hay stock disponible']);
        }

        /*El método updateOrInsert intentará localizar un registro de base de datos coincidente utilizando los
        pares de valores y columnas del primer argumento. Si el registro existe, se actualizará con los valores
        del segundo argumento. Si no se puede encontrar el registro, se insertará un nuevo registro con los
        atributos combinados de ambos argumentos:*/
        DB::table('shopping_cart')->updateOrInsert([
            'user_id' => $user->id,
            'product_id' => $product->id,
        ], [
            'quantity' => $request->quantity,
            'total_price_quantity' => $request->quantity * $product->price
        ]);

        return Redirect::route('shopping-cart.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {


        $user = auth()->user(); //auth()->user()->with('shopping_cart');
        $user->shopping_cart()->detach($id);

        return Redirect::back();
    }

    /**
     * .
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */


    public function apply_cupon_discount(Request $request)
    {

        $request->validate([
            'code' => 'required|exists:discount_codes,code',
        ]);

        $discount = DiscountCode::where('code', $request->code)->where('active', true)->first();

        if (!$discount) { //esta vacio
            return Redirect::route('shopping-cart.index')->withErrors([
                'code' => 'Le coupon n\'existe pas ou n\'est pas actif.'
            ]);
        }

        session(['discount_code' => $request->code]);
        return Redirect::route('shopping-cart.index');
    }

    public function remove_cupon_discount(Request $request)
    {
        session()->forget('discount_code');
        return Redirect::route('shopping-cart.index');
    }
}
