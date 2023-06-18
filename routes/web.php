<?php

use App\Http\Controllers\DataIndukSantriController;
use App\Http\Controllers\InputAbsensiController;
use App\Http\Controllers\InputBilhifzhiController;
use App\Http\Controllers\InputBinnadzorController;
use App\Http\Controllers\InputTesSemesterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TambahSantriController;
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

// Role Semua
Route::middleware(['auth', 'role:Admin|Ketua|Bendahara|Pengurus|Keamanan|Pendidikan'])->group(function () {

    // Route Data Induk Santri
    Route::controller(DataIndukSantriController::class)->group(function () {
        Route::get('data-induk-santri', 'index')->name('data-induk-santri');
        Route::get('data-induk-santri/edit', 'edit')->name('data-induk-santri.edit');
        Route::put('data-induk-santri', 'update')->name('data-induk-santri.update');
        Route::post('data-induk-santri', 'simpan')->name('data-induk-santri.simpan');
        Route::delete('data-induk-santri', 'hapus')->name('data-induk-santri.hapus');
    });

    // Route Input Absensi
    Route::controller(InputAbsensiController::class)->group(function () {
        Route::get('input-absensi', 'index')->name('input-absensi');
        Route::post('input-absensi', 'simpan')->name('input-absensi.simpan');
        Route::delete('input-absensi', 'hapus')->name('input-absensi.hapus');
    });

    // Route Input Binnadzor
    Route::controller(InputBilhifzhiController::class)->group(function () {
        Route::get('input-bilhifzhi', 'index')->name('input-bilhifzhi');
        Route::post('input-bilhifzhi', 'simpan')->name('input-bilhifzhi.simpan');
        Route::delete('input-bilhifzhi', 'hapus')->name('input-bilhifzhi.hapus');
    });

    // Route Input Binnadzor
    Route::controller(InputBinnadzorController::class)->group(function () {
        Route::get('input-binnadzor', 'index')->name('input-binnadzor');
        Route::post('input-binnadzor', 'simpan')->name('input-binnadzor.simpan');
        Route::delete('input-binnadzor', 'hapus')->name('input-binnadzor.hapus');
    });

    // Route Input Tes Semester
    Route::controller(InputTesSemesterController::class)->group(function () {
        Route::get('input-tes-semester', 'index')->name('input-tes-semester');
        Route::post('input-tes-semester', 'simpan')->name('input-tes-semester.simpan');
        Route::delete('input-tes-semester', 'hapus')->name('input-tes-semester.hapus');
    });

    // Route Tambah Santri
    Route::controller(TambahSantriController::class)->group(function () {
        Route::get('tambah-santri', 'index')->name('tambah-santri');
        Route::post('tambah-santri', 'simpan')->name('tambah-santri.simpan');

        //Edit
        Route::get('edit-santri', 'edit')->name('edit-santri');
        Route::post('edit-santri', 'update')->name('edit-santri.update');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/admin.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/bendahara.php';
require __DIR__ . '/data.php';
require __DIR__ . '/santri.php';
