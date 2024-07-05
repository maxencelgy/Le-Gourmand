<?php
//
//namespace App\Console\Commands;
//
//use App\Models\Category;
//use App\Models\Image;
//use App\Models\Product;
//use Illuminate\Console\Command;
//
//use Illuminate\Support\Facades\Http;
//use Illuminate\Support\Facades\Storage;
//use Illuminate\Support\Str;
//
//class RecupBurger extends Command
//{
//    /**
//     * The console command name.
//     *
//     * @var string
//     */
//    protected $signature = 'recup:burger';
//
//    /**
//     * The console command description.
//     *
//     * @var string
//     */
//    protected $description = 'Recup les burgers. Pour le seeder.';
//
//    /**
//     * Execute the console command.
//     *
//     * @return mixed
//     */
//    public function handle()
//    {
////        Product::truncate();
//
//
//        $produits = [];
//        $apiBk = Http::get('https://webapi.burgerking.fr/blossom/api/v13/public/carte/burgers')->json();
////        $apiBk = Http::get('https://webapi.burgerking.fr/blossom/api/v13/public/carte/boissons')->json();
////
//        foreach ($apiBk['products'] as $product) {
//            $single = Http::get('https://webapi.burgerking.fr/blossom/api/v13/public' . $product['productId'])->json();
//            $allergens = [];
//            foreach ($single['product']['allergens'] as $allergen) {
//                $allergens[] = $allergen['name'];
//            }
//            $produit = [
//                'title' => $single['title'],
//                'description' => $single['description'],
//                'category' => $single['filters'][0]['name'],
//                'image' => $single['product']['image'],
//                'portion' => $single['product']['nutrition'][0]['portion'],
//                'calories' => $single['product']['nutrition'][0]['share'],
//                'price' => rand(5, 15),
//                'allergens' => implode(', ', $allergens),
//            ];
//            $produits[] = $produit;
//        }
//
//        foreach ($produits as $key => $product) {
//            // Ensure that $produit['image'] is a string containing the URL
//            $imageResponse = Http::get($product['image'][0]);
//            // Check if the image content was correctly retrieved
//            if ($imageResponse->failed()) {
//                echo "Failed to retrieve image content";
//                continue;
//            }
//
//            $imageContents = $imageResponse->body();
//            $imageName =  Str::slug($product['title']) . '.jpg'; // Generate a random name for the image
//
//            // Ensure the destination directory exists
//            Storage::makeDirectory('images');
//
//            $path = 'images/' . $imageName;
//            Storage::put($path, $imageContents);
//
//            // Check if the image was stored correctly
//            if (Storage::exists($path)) {
//                echo "Image stored correctly";
//
//
//               $cat = Category::updateOrCreate(
//                    ['name' => $product['category']],
//                    [
//                        'slug' => Str::slug($product['category']),
//                        'img' => $path,
//                        'type' => 'menu',
//                    ]
//                );
//
//
//                // Print the created Image instance
//                $prod = Product::create([
//                    'name' => $product['title'],
//                    'slug' => Str::slug($product['title']),
//                    'description_max' => $product['description'], // 'description_max' => $product['description'],
//                    'description_min' => substr($product['description'],0, 100),
//                    'category_id' => $cat->id,
//                    'img' => $path,
//                    'banner' => $path,
//                    'price' => $product['price'],
//                    'stock' => rand(0, 100),
//                    'portion_size' => $product['portion'] . ' g',
//                    'calories' => $product['calories'] . ' kcal',
//                    'allergies' => $product['allergens'],
//                ]);
//                $this->info('Produit ' . $prod->name . ' créé');
//
//
//            } else {
//                echo "Failed to store image";
//            }
//        }
//
//
//    }
//}
