<?php

use App\Http\Controllers\AboutMeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PortofolioController;
use Illuminate\Support\Facades\Route;

Route::resource('/', HomeController::class)->only('index');
Route::resource('about-me', AboutMeController::class)->only('index');
Route::resource('portofolio', PortofolioController::class)->only(['index', 'show']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';