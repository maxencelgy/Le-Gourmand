<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\Promo;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pages = [
            [
                'type' => 'home',
                'img' => 'home/banner.jpg',
                'title' => 'PARTAGEZ ET PROFITEZ',

            ],
            [
                'type' => 'menu',
                'img' => 'menu/banner.jpg',
                'title' => 'NOTRE MENU',
            ],
//            [
//                'type' => 'about',
//                'img' => 'about/banner.jpg',
//                "title" => "Acerca de nosotros",
//            ],
//            [
//                'type' => 'gallery',
//                'img' => 'galleries/banner.jpg',
//                "title" => "Galeria de imagenes",
//
//            ],
//            [
//                'type' => 'locations',
//                'img' => 'locations/banner.jpg',
//                "title" => "NUESTRAS UBICACIONES",
//
//            ],
//            [
//                'type' => 'team',
//                'img' => 'team/banner.jpg',
//                "title" => "Notre équipe",
//
//            ],
//            [
//                'type' => 'faq',
//                'img' => 'faq/banner.jpg',
//                "title" => "PREGUNTAS FRECUENTES",
//
//            ],
            [
                'type' => 'terms',
                'img' => 'terms/banner.jpg',
                "title" => "Termes et conditions",

            ],
            [
                'type' => 'gift_cards',
                'img' => 'gift_cards/banner.jpg',
                "title" => "Carte cadeaux",

            ],

            // [
            //     'type' => 'order',
            //     'img' => 'order/banner.jpg',
            //     "title" => "",
            // ],
        ];
        Page::truncate();
        DB::table('page_promo')->truncate();
        Promo::truncate();
        Page::factory()
            ->count(count($pages))
            ->has(Promo::factory()->count(2))
            ->state(new Sequence(...$pages))
            ->create();
        // foreach ($pages as $key => $page) {
        //     Page::create([
        //         'type' => $page['type'],
        //         'img' => $page['img'],
        //         "title" => $page['title'],
        //         'breadcrumb' => $page['breadcrumb'],
        //         'options' => $page['options'],

        //     ]);
        // }
    }
}
