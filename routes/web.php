<?php

use App\Http\Controllers\DataIndukSantriController;
use App\Http\Controllers\GetDataController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UploadSantriController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('Auth/Login');
});

Route::get('/dashboard', function () {
    return inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Get Data
Route::middleware(['auth'])->group(function (){

    Route::controller(GetDataController::class)->group(function(){
        Route::post('get-data-induk-santri', 'get_data_induk_santri')->name('get-data-induk-santri');
    });

});

// Role Admin
Route::middleware(['auth', 'role:Admin'])->group(function (){

    Route::controller(UploadSantriController::class)->group(function(){
        Route::get('upload-santri', 'index')->name('upload-santri');
        Route::post('upload-santri', 'upload')->name('upload-santri.upload');
    });

});

// Role Semua
Route::middleware(['auth', 'role:Admin|Ketua|Bendahara|Pengurus|Keamanan|Pendidikan|Santri'])->group(function (){

    Route::controller(DataIndukSantriController::class)->group(function(){
        Route::get('data-induk-santri', 'index')->name('data-induk-santri');
        Route::get('data-induk-santri/edit', 'edit')->name('data-induk-santri.edit');
        Route::put('data-induk-santri', 'update')->name('data-induk-santri.update');
        Route::post('data-induk-santri', 'simpan')->name('data-induk-santri.simpan');
    });

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
