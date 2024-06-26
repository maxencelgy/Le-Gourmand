<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'address',
        'phone',
        'country',
        'city',
        'active',
        'password',
    ];
    protected $appends = ['cartCount'];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */

    protected $casts = [
        'name' => 'string',
        'phone' => 'string',
        'email' => 'string',
        'active' => 'boolean',
        'email_verified_at' => 'datetime',
    ];
    protected $attributes = [
        'active' => 0,
        'name' => '',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */

    public function shopping_cart()
    {
        return $this->belongsToMany(Product::class, 'shopping_cart')->withPivot('quantity', 'total_price_quantity')->withTimestamps();
    }
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function getCartCountAttribute(){
        return $this->shopping_cart->sum('pivot.quantity');
    }

    public function getShoppingCartTotalAttribute()
    {
        $sub_total = $this->shopping_cart->sum('pivot.total_price_quantity');
        $tax_percent = 20;
        $total = $sub_total;
        $tax_amount = $sub_total * ($tax_percent / 100);
        $discount_availables = DiscountCode::get()->random(5);
        $discount = null;

        $code = session('discount_code');
        if ($code) {
            $discount = DiscountCode::where('code', $code)->where('active', true)->first();
            if ($discount->type == 'percent') {
                $discount->applied  = $sub_total * ($discount->value / 100);
            } else {
                $discount->applied  = $discount->value;
            }
            $total -= $discount->applied;
            $total = ($total < 0) ? 0 : $total; //num positivos
        }

        $total += $tax_amount;

        return [
            'tax_percent' => $tax_percent,
            'tax_amount' => round($tax_amount, 2),
            'sub_total' => round($sub_total, 2),
            'total' => round($total, 2),
            'discount' => $discount,
            'discount_availables' => $discount_availables
        ];
    }
}
