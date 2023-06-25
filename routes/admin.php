<?php

use App\Http\Controllers\TambahPenggunaController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadSantriController;

// Role Admin
Route::middleware(['auth', 'role:Admin'])->group(function () {

    // Route Tambah Pengguna
    Route::controller(TambahPenggunaController::class)->group(function () {
        Route::get('tambah-pengguna', 'index')->name('tambah-pengguna');
        Route::post('tambah-pengguna', 'simpan')->name('tambah-pengguna.simpan');
    });

    // Route Upload Santri
    Route::controller(UploadSantriController::class)->group(function () {
        Route::get('upload-santri', 'index')->name('upload-santri');
        Route::post('upload-santri', 'upload')->name('upload-santri.upload');
    });
});
