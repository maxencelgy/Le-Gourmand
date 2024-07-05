<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Route;

class GenerateApiDocs extends Command
{
    protected $signature = 'generate:apidocs';
    protected $description = 'Generate API documentation in Markdown format';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $routes = Route::getRoutes();
        $markdown = "# Endpoints\n\n";

        foreach ($routes as $route) {
            $uri = $route->uri();
            $methods = implode(', ', $route->methods());
            $action = $route->getActionName();

            $markdown .= "## {$uri}\n\n";
            $markdown .= "**Methods:** {$methods}\n\n";
            $markdown .= "**Action:** {$action}\n\n";
            $markdown .= "---\n\n";
        }

        file_put_contents(resource_path('docs/endpoints.md'), $markdown);
        $this->info('API documentation generated successfully!');
    }
}
