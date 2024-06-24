<?php

namespace App\Http\Livewire\Category;

use Livewire\Component;
use App\Http\Traits\WithSorting;
use App\Models\Category;
use Livewire\WithPagination;
class ListCategories extends Component
{
    use WithPagination;
    use WithSorting;

    protected $listeners = [
        'renderListCategories' => 'render',
        'resetListCategories' => 'resetList'
    ];


    public function render()
    {
        $fields=['Nom - slug','Image','Dernier accès','Active'];

        $data = Category::where('name', 'like', '%' . $this->search . '%')
        ->where('type','!=','gift_card')
            ->orderBy($this->sortBy, $this->sortDirection)
            ->paginate(10);
        return view('livewire.category.list-categories',compact('data','fields'));
    }
}
