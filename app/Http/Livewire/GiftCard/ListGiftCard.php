<?php

namespace App\Http\Livewire\GiftCard;

use App\Http\Traits\WithSorting;
use App\Models\Product;
use Livewire\Component;
use Livewire\WithPagination;

class ListGiftCard extends Component
{   use WithPagination;
    use WithSorting;

    protected $listeners = [
        'renderListGiftCard' => 'render',
        'resetListGiftCard' => 'resetList'
    ];

    public function render()
    {
        $fields = [  'Prix', 'Image', 'Dernier accès', 'Actions'];

        $data = Product::where('name', 'like', '%' . $this->search . '%')
            ->with('category')
            ->whereHas('category' , function ($query) {
                $query->where('type','=', 'gift_cards');
            })
            ->orderBy($this->sortBy, $this->sortDirection)
            ->paginate(10);
        //dd($data);
        return view('livewire.gift-cart.list-gift-cart',compact('data','fields'));
    }
}
