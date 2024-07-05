<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Faker;

class BoissonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::truncate();


        $categoryBoisson = Category::Create(
            [
                'name' => 'Boissons',
                'slug' => Str::slug('Boissons'),
                'img' => '',
                'type' => 'menu',
            ],
        );


        // Print the created Image instance
        $boissons = [
            [
                'title' => 'Coca-Cola',
                'description' => 'Une boisson gazeuse rafraîchissante.',
                'price' => 1.50,
                'portion' => 330,
                'calories' => 140,
                'allergens' => 'Aucun'
            ],
            [
                'title' => 'Jus d\'orange',
                'description' => 'Un jus d\'orange frais et naturel.',
                'price' => 2.00,
                'portion' => 250,
                'calories' => 110,
                'allergens' => 'Aucun'
            ],
            [
                'title' => 'Thé Glacé',
                'description' => 'Un thé glacé au citron rafraîchissant.',
                'price' => 1.75,
                'portion' => 500,
                'calories' => 90,
                'allergens' => 'Aucun'
            ],
            [
                'title' => 'Café Froid',
                'description' => 'Un café froid énergisant.',
                'price' => 2.50,
                'portion' => 300,
                'calories' => 120,
                'allergens' => 'Lait'
            ],
            [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ], [
                'title' => 'Limonade',
                'description' => 'Une limonade pétillante et rafraîchissante.',
                'price' => 1.25,
                'portion' => 330,
                'calories' => 150,
                'allergens' => 'Aucun'
            ],
        ];
        foreach ($boissons as $boisson) {
            $prod = Product::create([
                'name' => $boisson['title'],
                'slug' => Str::slug($boisson['title']),
                'description_max' => $boisson['description'],
                'description_min' => substr($boisson['description'], 0, 100),
                'category_id' => $categoryBoisson->id,
                'img' => '',
                'banner' => '',
                'price' => $boisson['price'],
                'stock' => rand(0, 100),
                'portion_size' => $boisson['portion'] . 'g',
                'calories' => $boisson['calories'] . 'kcal',
                'allergies' => $boisson['allergens'],
            ]);
        }




    }
}
