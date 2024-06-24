<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class RecupBurger extends Command
{

    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'recup:burger';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Recup les burgers. Pour le seeder.';




    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $apiBk = Http::get('https://webapi.burgerking.fr/blossom/api/v13/public/carte/burgers')->json();
        // single = https://webapi.burgerking.fr/blossom/api/v13/public/produit/master-du-chef-poulet
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
            'price' => rand(5,15),
                'allergens' => implode(', ', $allergens),
        ];
            dd($produit);

        }
    }
}
