<?php

namespace App\Services;

use Goutte\Client;

class WebScraper
{
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function scrape($url)
    {
        $crawler = $this->client->request('GET', $url);
        dd($crawler->html());

        // Exemple : récupérer les titres des articles
        $titles = $crawler->filter('h2.article-title')->each(function ($node) {
            return $node->text();
        });

        return $titles;
    }
}
