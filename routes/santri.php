<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BilhifzhiController;
use App\Http\Controllers\BinnadzorController;
use App\Http\Controllers\KehadiranController;
use App\Http\Controllers\AdministrasiController;

// Menu Santri
Route::middleware(['auth', 'role:Santri'])->group(function () {

    // Route Administrasi
    Route::get('administrasi', AdministrasiController::class)->name('administrasi');

    // Route Bilhifzhi
    Route::get('bilhifzhi', BilhifzhiController::class)->name('bilhifzhi');

    // Route Binnadzor
    Route::get('binnadzor', BinnadzorController::class)->name('binnadzor');

    // Route Kehadiran
    Route::get('kehadiran', KehadiranController::class)->name('kehadiran');
});