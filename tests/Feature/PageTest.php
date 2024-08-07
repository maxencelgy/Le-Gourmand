<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PageTest extends TestCase
{
    use RefreshDatabase;

    public function test_page_home()
    {
        $response = $this->get(route('home'));
        $response->assertStatus(200);
    }
    public function test_page_menu()
    {
        $response = $this->get(route('menu'));
        $response->assertStatus(200);
    }
    public function test_page_about()
    {
        $response = $this->get(route('about'));
        $response->assertStatus(200);
    }



    public function test_page_terms()
    {
        $response = $this->get(route('terms'));
        $response->assertStatus(200);
    }
    public function test_page_gift_cards()
    {
        $response = $this->get(route('gift_cards'));
        $response->assertStatus(200);
    }

    public function test_page_product()
    {

        $response = $this->get(route('product',['slug'=>Product::first()->slug]));
        $response->assertStatus(200);
    }
}
