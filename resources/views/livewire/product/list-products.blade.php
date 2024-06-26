<div>
    <x-slot name="header">
        <h2 class="font-bold text-xl text-gray-800 leading-tight">
            {{ __('Produits') }}
        </h2>
    </x-slot>
    <div>

        <x-list-data text-button='Ajouter un produit' :data="$data" :fields="$fields">
            <x-slot name="table_data">
                @foreach ($data as $item)
                    <tr>
                        <td class="px-6 py-3 text-sm font-medium">
                            {{ $item->id }}
                        </td>

                        <td class="px-6 py-3 whitespace-nowrap">

                            <div class="text-sm font-medium text-gray-900">
                                {{ $item->name }}
                            </div>
                            <div class="text-sm text-gray-500">
                                @if ($item->category)
                                {{ $item->category->name }}
                                @else
                                <span class="text-red-400">Voir catégorie</span>
                                @endif
                            </div>
                        </td>
                        <td class="px-6 py-3 ">
                            <img class="rounded-lg w-16 h-16 object-cover max-w-full"
                                 src="/storage/{{ $item->img }}?{{rand(1,100)}}" />
                        </td>
                        <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                            {{ Helpers::format_price($item->price) }}
                        </td>



                        <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                            {{ $item->updated_at }}
                        </td>

                        <td class="px-6 py-3 whitespace-nowrap ">
                            <x-active-item :active="$item->active" />
                        </td>

                        <td class="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <button class="font-medium text-indigo-600 hover:text-indigo-900"
                                x-on:click="$dispatch('form-edit',{{ $item->id }})">Edit</button>

                            <a href="#" class="font-medium text-red-600 hover:text-red-900 ml-3 " x-on:click="
                            $dispatch('open-modal-confirmation-delete',{{ $item->id }})">Delete</a>
                        </td>
                    </tr>
                @endforeach
            </x-slot>

        </x-list-data>

        @livewire('product.create-product')
    </div>

</div>
