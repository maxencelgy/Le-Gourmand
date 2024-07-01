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

class ProductSeeder extends Seeder
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

        $produits = [];
        $apiBk = Http::get('https://webapi.burgerking.fr/blossom/api/v13/public/carte/burgers')->json();

        foreach ($apiBk['products'] as $product) {
            $single = Http::get('https://webapi.burgerking.fr/blossom/api/v13/public' . $product['productId'])->json();
            $allergens = [];
            foreach ($single['product']['allergens'] as $allergen) {
                $allergens[] = $allergen['name'];
            }
            $produit = [
                'title' => $single['title'],
                'description' => $single['description'],
                'category' => $single['filters'][0]['name'],
                'image' => $single['product']['image'],
                'portion' => $single['product']['nutrition'][0]['portion'],
                'calories' => $single['product']['nutrition'][0]['share'],
                'price' => rand(5, 15),
                'allergens' => implode(', ', $allergens),
            ];
            $produits[] = $produit;
        }

        foreach ($produits as $key => $product) {
            // Ensure that $produit['image'] is a string containing the URL
            $imageResponse = Http::get($product['image'][0]);
            // Check if the image content was correctly retrieved
            if ($imageResponse->failed()) {
                echo "Failed to retrieve image content";
                continue;
            }

            $imageContents = $imageResponse->body();
            $imageName = $key . '.jpg'; // Generate a random name for the image

            // Ensure the destination directory exists
            Storage::makeDirectory('images');

            $path = 'images/' . $imageName;
            Storage::put($path, $imageContents);

            // Check if the image was stored correctly
            if (Storage::exists($path)) {
                echo "Image stored correctly";

                $cat = Category::updateOrCreate(
                    ['name' => $product['category']],
                    [
                        'slug' => Str::slug($product['category']),
                        'img' => $path,
                        'type' => 'menu',
                    ]
                );


                // Print the created Image instance
                $prod = Product::create([
                    'name' => $product['title'],
                    'slug' => Str::slug($product['title']),
                    'description_max' => $product['description'], // 'description_max' => $product['description'],
                    'description_min' => substr($product['description'], 0, 100),
                    'category_id' => $cat->id,
                    'img' => $path,
                    'banner' => $path,
                    'price' => $product['price'],
                    'stock' => rand(0, 100),
                    'portion_size' => $product['portion'] . 'g',
                    'calories' => $product['calories'] . 'kcal',
                    'allergies' => $product['allergens'],
                ]);
            } else {
                echo "Failed to store image";
            }
        }



    }
}
