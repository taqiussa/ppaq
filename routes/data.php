<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GetDataController;
use App\Http\Controllers\GetDataSantriController;
use App\Http\Controllers\GetDataBendaharaController;

// Get Data
Route::middleware(['auth'])->group(function () {

    // Route Get Data
    Route::controller(GetDataController::class)->group(function () {
        Route::post('get-absensi', 'get_absensi')->name('get-absensi');
        Route::post('get-data-induk-santri', 'get_data_induk_santri')->name('get-data-induk-santri');
        Route::post('get-pelanggaran', 'get_pelanggaran')->name('get-pelanggaran');
        Route::post('get-skor', 'get_skor')->name('get-skor');
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
        Route::post('get-bilhifzhi', 'get_bilhifzhi')->name('get-bilhifzhi');
        Route::post('get-binnadzor', 'get_binnadzor')->name('get-binnadzor');
        Route::post('get-halaqoh', 'get_halaqoh')->name('get-halaqoh');
        Route::post('get-kehadiran', 'get_kehadiran')->name('get-kehadiran');
        Route::post('get-tashih-pengasuh', 'get_tashih_pengasuh')->name('get-tashih-pengasuh');
        Route::post('get-tes-semester', 'get_tes_semester')->name('get-tes-semester');
    });
});
