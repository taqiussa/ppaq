<?php

use App\Http\Controllers\AdministrasiController;
use App\Http\Controllers\AturKategoriPembayaranController;
use App\Http\Controllers\AturWajibBayarController;
use App\Http\Controllers\DataIndukSantriController;
use App\Http\Controllers\GetDataBendaharaController;
use App\Http\Controllers\GetDataController;
use App\Http\Controllers\GetDataSantriController;
use App\Http\Controllers\InputAbsensiController;
use App\Http\Controllers\InputPembayaranController;
use App\Http\Controllers\KehadiranController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RekapPembayaranController;
use App\Http\Controllers\UploadSantriController;
use App\Models\User;
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
Route::middleware(['auth'])->group(function () {

    // Route Get Data
    Route::controller(GetDataController::class)->group(function () {
        Route::post('get-absensi', 'get_absensi')->name('get-absensi');
        Route::post('get-data-induk-santri', 'get_data_induk_santri')->name('get-data-induk-santri');
    });

    // Route Get Data Bendahara
    Route::controller(GetDataBendaharaController::class)->group(function () {
        Route::post('get-all-pembayaran', 'get_all_pembayaran')->name('get-all-pembayaran');
        Route::post('get-pembayaran', 'get_pembayaran')->name('get-pembayaran');
        Route::post('get-wajib-bayar', 'get_wajib_bayar')->name('get-wajib-bayar');
    });

    // Route Get Data Santri
    Route::controller(GetDataSantriController::class)->group(function () {
        Route::post('get-administrasi', 'get_administrasi')->name('get-administrasi');
        Route::post('get-kehadiran', 'get_kehadiran')->name('get-kehadiran');
    });
});

// Role Admin
Route::middleware(['auth', 'role:Admin'])->group(function () {

    Route::controller(UploadSantriController::class)->group(function () {
        Route::get('upload-santri', 'index')->name('upload-santri');
        Route::post('upload-santri', 'upload')->name('upload-santri.upload');
    });
});

// Role Bendahara
Route::middleware(['auth', 'role:Bendahara'])->group(function () {

    // Route Atur Kategori Pembayaran
    Route::controller(AturKategoriPembayaranController::class)->group(function () {
        Route::get('atur-kategori-pembayaran', 'index')->name('atur-kategori-pembayaran');
        Route::post('atur-kategori-pembayaran', 'simpan')->name('atur-kategori-pembayaran.simpan');
        Route::delete('atur-kategori-pembayaran', 'hapus')->name('atur-kategori-pembayaran.hapus');
    });

    // Route Atur Wajib Bayar
    Route::controller(AturWajibBayarController::class)->group(function () {
        Route::get('atur-wajib-bayar', 'index')->name('atur-wajib-bayar');
        Route::post('atur-wajib-bayar', 'simpan')->name('atur-wajib-bayar.simpan');
        Route::delete('atur-wajib-bayar', 'hapus')->name('atur-wajib-bayar.hapus');
    });

    // Route Atur Wajib Bayar
    Route::controller(InputPembayaranController::class)->group(function () {
        Route::get('input-pembayaran', 'index')->name('input-pembayaran');
        Route::post('input-pembayaran', 'simpan')->name('input-pembayaran.simpan');
        Route::delete('input-pembayaran', 'hapus')->name('input-pembayaran.hapus');
    });

    // Route Rekap Pembayaran
    Route::controller(RekapPembayaranController::class)->group(function () {
        Route::get('rekap-pembayaran', 'index')->name('rekap-pembayaran');
        Route::delete('rekap-pembayaran', 'hapus')->name('rekap-pembayaran.hapus');
    });
});

// Role Semua
Route::middleware(['auth', 'role:Admin|Ketua|Bendahara|Pengurus|Keamanan|Pendidikan|Santri'])->group(function () {

    // Route Data Induk Santri
    Route::controller(DataIndukSantriController::class)->group(function () {
        Route::get('data-induk-santri', 'index')->name('data-induk-santri');
        Route::get('data-induk-santri/edit', 'edit')->name('data-induk-santri.edit');
        Route::put('data-induk-santri', 'update')->name('data-induk-santri.update');
        Route::post('data-induk-santri', 'simpan')->name('data-induk-santri.simpan');
    });

    // Route Input Absensi
    Route::controller(InputAbsensiController::class)->group(function () {
        Route::get('input-absensi', 'index')->name('input-absensi');
        Route::post('input-absensi', 'simpan')->name('input-absensi.simpan');
        Route::delete('input-absensi', 'hapus')->name('input-absensi.hapus');
    });

    // Menu Santri
    // Route Administrasi
    Route::get('administrasi', AdministrasiController::class)->name('administrasi');
    Route::get('kehadiran', KehadiranController::class)->name('kehadiran');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
