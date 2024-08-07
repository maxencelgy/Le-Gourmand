<div>
    <x-slot name="header">
        <h2 class="font-bold text-xl text-gray-800 leading-tight">
            {{ __('Code de réduction') }}
        </h2>
    </x-slot>
    <div>

        <x-list-data text-button='Ajouter un code promo' :data="$data" :fields="$fields">
            <x-slot name="table_data">
                @foreach ($data as $item)
                    <tr>
                        <td class="px-6 py-3 text-sm font-medium">
                            {{ $item->id }}
                        </td>

                        <td class="px-6 py-3 ">
                            <div class="text-sm font-medium text-gray-900">
                                {{ $item->name }}
                            </div>
                            <div class="text-xs text-gray-500">
                                {{ $item->description }}
                            </div>
                        </td>

                        <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                            {{ $item->code }}
                        </td>

                        <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                            @if ($item->type == 'percent')
                                <span
                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    Pourcentage - {{ $item->value }}%
                                </span>

                            @else
                                <span
                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    Valeur - {{ Helpers::format_price($item->value) }}
                                </span>
                            @endif
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

        @livewire('discount-code.create-discount-code')



    </div>

</div>
