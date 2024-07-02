<div>

    <x-create-data>
        <div class=" flex items-center justify-between mb-6">
            <h3 class="text-lg font-medium leading-6">Commande #{{ $order->order }}</h3>

            @if ($order->state != 'refunded')
                <a href="#" class="font-medium text-red-600 hover:text-red-900 ml-3 " x-on:click="
            $dispatch('open-modal-confirmation-delete',{{ $order->id }})">
                    {{ $order->state != 'réussi' ? 'Remboursement' : 'Annuler' }} Commande
                </a>
            @endif
        </div>

        <div class="space-y-2 mb-6 text-sm">
            <div class="flex items-center">
                <span class="font-semibold mr-2">Nom :</span>
                {{ $user->name }}
            </div>
            <div class="flex items-center">
                <span class="font-semibold mr-2">Téléphone :</span>
                {{ $order->phone }}
            </div>
            <div class="flex items-center">
                <span class="font-semibold mr-2">Adresse :</span>
                {{ $order->address }}
            </div>
            <div class="flex items-center">
                <span class="font-semibold mr-2">Note :</span>
                {{ $order->note ? $order->note : 'sans note' }}
            </div>
            <div class="flex items-center">
                <span class="font-semibold mr-2">
Date de creation:
                </span>
                {{ $order->created_at }}
            </div>
            <div class="flex items-center">
                <span class="font-semibold mr-2">
état:
                </span>
                <div class="text-sm">
                    <x-order-state :state="$order->state"/>
                </div>
            </div>
        </div>
        <div>
            <table class="w-full rounded-lg overflow-hidden table-fixed text-sm">
                <thead>
                <tr>
                    <th class="px-4 py-2 bg-gray-100 text-heading font-semibold text-left">
                        Commande
                    </th>
                    <th class="px-4 py-2 bg-gray-100 text-heading font-semibold text-left">
                        Montant
                    </th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                @foreach ($order->products as $product)
                    <tr>
                        <td class="px-4 py-2 text-left">
                            {{ $product->quantity }} x {{ $product->name }}
                        </td>
                        <td class="px-4 py-2 text-left">
                            {{ Helpers::format_price($product->total_price_quantity) }}
                        </td>
                    </tr>
                @endforeach


                <tr class="font-semibold italic bg-gray-100">
                    <td class="px-4 py-2 text-left ">Sous total</td>
                    <td class="px-4 py-2 text-left">
                        {{ Helpers::format_price($order->sub_total) }}
                    </td>
                </tr>

                @if ($order->discount)
                    <tr class="font-semibold italic">
                        <td class="px-4 py-2 text-left ">Rabais</td>
                        <td class="px-4 py-2 text-left">
                            -{{ Helpers::format_price($order->discount->applied) }}
                        </td>
                    </tr>
                @endif

                <tr class="font-semibold italic">
                    <td class="px-4 py-2 text-left ">
                        TVA ({{ $order->tax_percent }}%)
                    </td>
                    <td class="px-4 py-2 text-left">
                        {{ Helpers::format_price($order->tax_amount) }}
                    </td>
                </tr>
                <tr class="font-semibold italic">
                    <td class="px-4 py-2 text-left ">Expédition</td>
                    <td class="px-4 py-2 text-left">
                        {{ Helpers::format_price($order->shipping) }}
                    </td>
                </tr>
                <tr class="font-bold  text-lg bg-gray-100">
                    <td class="px-4 py-2 text-left ">Total</td>
                    <td class="px-4 py-2 text-left">
                        {{ Helpers::format_price($order->total) }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>


        <div class="text-right py-3">

            <x-secondary-button x-on:click="$dispatch('list-show')" wire:loading.attr="disabled">
                voir
            </x-secondary-button>

        </div>
    </x-create-data>

    <!--Modal confirmation delete-->
    <div>
        <div x-data="{
            show :@entangle('open_modal_confirmation').defer,
            id:null
        }" @open-modal-confirmation-delete.window="show = true;id=$event.detail;">

            <x-confirmation-modal>
                <x-slot name="title">
                    Annuler la commande
                </x-slot>

                <x-slot name="content">
                    <p class="mb-2">
                        Êtes-vous sûr de vouloir annuler cette commande ?
                    </p>
                    <div class="flex items-center">
                        <input type="checkbox" id="refund" class="mr-3 text-red-500 focus:ring-red-500 rounded"
                               wire:model.defer="refund_checkbox">
                        <label for="refund">

                            Rembourser de l'argent
                            <span class="text-red-500">{{ Helpers::format_price($order->total) }}</span>
                        </label>
                    </div>
                </x-slot>

                <x-slot name="footer">
                    <x-secondary-button x-on:click="show=false" wire:loading.attr="disabled">
                        Annuler
                    </x-secondary-button>

                    <x-danger-button class="ml-2" x-on:click="$wire.delete(id)" wire:loading.attr="disabled">
                        <span wire:loading.class="hidden" wire:target="delete">Annulation</span>
                        <span wire:loading wire:target="delete"> Annulation... </span>
                    </x-danger-button>
                </x-slot>
            </x-confirmation-modal>
        </div>
    </div>
</div>
