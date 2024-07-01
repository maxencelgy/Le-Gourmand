@php
$nav_items = [
    [
        'name' => 'Dashboard',
        'route' => 'dashboard.home',
        'icon' => 'home',
    ],
    [
        'name' => 'Utilisateurs',
        'route' => 'dashboard.users',
        'icon' => 'user',
    ],
    [
        'name' => 'Catégories',
        'route' => 'dashboard.categories',
        'icon' => 'view-grid',
    ],
    [
        'name' => 'Produits',
        'route' => 'dashboard.products',
        'icon' => 'shopping-bag',
    ],
    [
        'name' => 'Cartes cadeaux',
        'route' => 'dashboard.gift_card',
        'icon' => 'cash',
    ],
    [
        'name' => 'Codes de réduction',
        'route' => 'dashboard.discount_code',
        'icon' => 'badge-check',
    ],

    [
        'name' => 'Pages',
        'route' => 'dashboard.page',
        'icon' => 'collection',
    ],
    [
        'name' => 'Promotions',
        'route' => 'dashboard.promo',
        'icon' => 'badge-check',
    ],
    [
        'name' => 'Commandes',
        'route' => 'dashboard.order',
        'icon' => 'badge-check',
    ],
];
@endphp
<div x-data="{ open: false }"
    class="sidebar-nabvar md:w-64 bg-gray-800 flex-shrink-0 flex-col  text-gray-300 hidden md:block  ">

    <div class="max-w-7xl mx-auto px-4  py-5">
        <div class="  text-2xl font-semibold text-white text-center">
            <a href="!#">
                Admin
            </a>
        </div>
    </div>

    <div class="px-2 py-3 hidden md:block space-y-2">
        @foreach ($nav_items as $item)
            <a href="{{ route($item['route']) }}"
                class="flex items-center rounded-md p-2.5 space-x-3 font-medium {{ request()->routeIs($item['route']) ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white' }} ">
                @svg("heroicon-s-".$item['icon'],'h-5 w-5')

                <span>{{ $item['name'] }}</span>
            </a>
        @endforeach

    </div>
</div>
