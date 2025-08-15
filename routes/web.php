<?php

use App\Http\Controllers\AboutMeController;
use App\Http\Controllers\PortofolioController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::resource('about-me', AboutMeController::class);
Route::resource('portofolio', PortofolioController::class);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
