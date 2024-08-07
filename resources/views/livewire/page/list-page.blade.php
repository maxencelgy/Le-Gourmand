<div>
    <x-slot name="header">
        <h2 class="font-bold text-xl text-gray-800 leading-tight">
            {{ __('Page') }}
        </h2>
    </x-slot>
    <div>
        <x-list-data text-button='' :data="$data" :fields="$fields">
            <x-slot name="table_data">
                @foreach ($data as $item)
                    <tr>
                        <td class="px-6 py-3 text-sm font-medium">
                            {{ $item->id }}
                        </td>

                        <td class="px-6 py-3 ">
                            <div class="text-sm font-medium text-gray-900">
                                {{ $item->title }}
                            </div>
                            <div class="text-xs text-gray-500">
                                {{ $item->type }}
                            </div>
                        </td>

                        <td class="px-6 py-3 ">
                            {{ \Illuminate\Support\Str::slug($item->title) }}
                        </td>
                        <td class="px-6 py-3 ">
                            <img class="w-32 rounded-lg" src="/storage/{{ $item->banner }}">
                        </td>

                        <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                            {{ $item->updated_at }}
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

        @livewire('page.create-page')
    </div>

</div>
