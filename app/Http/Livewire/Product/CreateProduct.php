<?php

namespace App\Http\Livewire\Product;


use App\Helpers\Helpers;
use App\Models\Category;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Str;

class CreateProduct extends Component
{
    use WithFileUploads;
    public Product $product;
    public $categories;
    public $category_id;
    public $open_modal_confirmation = false;
    public $img;
    public $banner;
    public $images = [];
    public $option = [];
    protected $rules = [
        'product.name' => 'required|string|max:255',
        'product.portion_size' => 'required|string|max:255',
        'product.calories' => 'required|string|max:255',
        'product.allergies' => 'required|string|max:255',
        'product.slug' => 'required|string|max:255',
        'product.description_min' => 'required|string',
        'product.price' => 'required|numeric',
        'product.active' => 'required|boolean',
        'product.stock' => 'required|integer',
        'img' => 'nullable|image|max:4096|mimes:jpeg,jpg,png',
        'banner' => 'nullable|image|max:4096|mimes:jpeg,jpg,png',
        'images.*' => 'nullable|image|max:4096|mimes:jpeg,jpg,png',
        'category_id' => 'required|exists:categories,id'
    ];
    protected $path = 'products';

    public function mount()
    {
        $this->product = new Product();
        $this->categories = Category::where('type', '!=', 'gift_card')->where('active', 1)->get();
    }
    public function create()
    {
        //$this->product = new Product();
        $this->product = Product::factory()->make();
        $this->reset('img', 'banner', 'images', 'category_id');
        $this->resetErrorBag();
    }

    public function save()
    {
        $rules = "required|image|max:2048|mimes:jpeg,jpg,png";
        $this->rules['img'] = $rules;
        $this->rules['banner'] = $rules;

        $this->validate();
        $product = $this->product;
        $product->slug = Str::slug($product->slug);
        $product->category()->associate($this->category_id);
        $product->img = 'images/' . $product->slug . '-img'  . '.' . $this->img->extension();
        $product->banner = 'images/' . $product->slug . '-banner'  . '.' . $this->banner->extension();
        $product->save();

        Helpers::image_upload($this->img, $product->img, true);
        Helpers::image_upload($this->banner, $product->banner);

        if ($this->images) {
            $path_name = $this->path . '/' . $product->slug;
            $name_images =  Helpers::images_store($this->images, $path_name);
            $product->images()->createMany($name_images);
        }

        $this->dispatchBrowserEvent('notification', [
            'title' => "Inscription ajoutée",
            'subtitle' => "Le Registre<b>". $this->product->name . "</b>a été ajouté avec succès"
        ]);

        $this->dispatchBrowserEvent('list-show');
        $this->reset('img', 'banner', 'images', 'category_id');
        $this->emit('resetListProducts');
        $this->product = new Product();
    }
    public function edit(Product $product)
    {
        $product->load('images');

        $this->product = $product;
        $this->category_id = $product->category_id;
        $this->reset('img', 'banner', 'images');
        $this->resetErrorBag();
    }
    public function update(Product $product)
    {
        $this->validate();
        $product = $this->product;
        $product->slug = Str::slug($product->slug);
        $product->category()->associate($this->category_id);
        $product->save();
        if ($this->img) {
            //Storage::delete('thumbnail/' . $product->img);
            //Storage::delete($product->img);
            $product->img =   'images/' . $product->slug . '-img'  . '.' . $this->img->extension();
            $product->save();
            Helpers::image_upload($this->img, $product->img, true);
        }

        if ($this->banner) {
            //Storage::delete($product->banner);
            $product->banner = 'images/' . $product->slug . '-banner'  . '.' . $this->banner->extension();
            $product->save();

            Helpers::image_upload($this->banner, $product->banner);
        }

        if ($this->images) {
            $path_name = $this->path . '/' . $product->slug;
            $name_images =  Helpers::images_store($this->images, $path_name);
            $product->images()->createMany($name_images);
        }

        $this->dispatchBrowserEvent('notification', [
            'title' => "Enregistrement édité",
            'subtitle' => "Le Registre<b>". $this->product->name . "</b>a été modifié avec succès"
        ]);
        $this->reset('img', 'banner', 'images', 'category_id');
        $this->resetErrorBag();
        $this->dispatchBrowserEvent('list-show');
        $this->emit('resetListProducts');

        $this->product = new Product();
    }
    public function updatedImg()
    {
        $this->validate([
            'img' => 'image|max:2048|mimes:jpeg,jpg,png'
        ]);
    }
    public function updatedBanner()
    {
        $this->validate([
            'banner' => 'image|max:2048|mimes:jpeg,jpg,png'
        ]);
    }
    public function updatedImages()
    {

        $this->validate([
            'images.*' => 'image|max:2048|mimes:jpeg,jpg,png',
        ]);
    }
    public function remove_img(Image $image)
    {

        //Storage::delete($image->img);

        $image->delete();

        $this->product->images = $this->product->images()->get();

        $this->dispatchBrowserEvent('notification', [
            'title' => "Image supprimée",
            'subtitle' => ""
        ]);
    }
    public function delete(Product $product)
    {
        //Storage::delete('thumbnail/' . $product->img);
        //Storage::delete($product->img);
        //Storage::delete($product->banner);
        if ($product->images->isNotEmpty() ) {  //isNotEmpty  -> no esta vacio
            $images_delete=[];
            foreach ($product->images as $key => $value) {
                $array_images_delete[$key]=$this->path.'/'.$value->image;
            }
            //Storage::delete($images_delete);

            $product->images()->delete();
        }

        $this->dispatchBrowserEvent('notification', [
            'title' => "Produit supprimé",
            'subtitle' => "Le Registre<b>". $this->product->name . "</b>a été supprimé avec succès"
        ]);
        $product->delete();
        $this->emit('resetListProducts');
        $this->open_modal_confirmation = false;
    }
    public function render()
    {
        return view('livewire.product.create-product');
    }
}
