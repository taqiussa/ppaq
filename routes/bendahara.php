<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AturWajibBayarController;
use App\Http\Controllers\InputPembayaranController;
use App\Http\Controllers\RekapPembayaranController;
use App\Http\Controllers\AturKategoriPembayaranController;

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