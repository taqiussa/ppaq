<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BilhifzhiController;
use App\Http\Controllers\BinnadzorController;
use App\Http\Controllers\KehadiranController;
use App\Http\Controllers\AdministrasiController;
use App\Http\Controllers\HalaqohController;

// Menu Santri
Route::middleware(['auth', 'role:Santri'])->group(function () {

    // Route Administrasi
    Route::get('administrasi', AdministrasiController::class)->name('administrasi');

    // Route Bilhifzhi
    Route::get('bilhifzhi', BilhifzhiController::class)->name('bilhifzhi');

    // Route Binnadzor
    Route::get('binnadzor', BinnadzorController::class)->name('binnadzor');

    // Route Halaqoh
    Route::get('halaqoh', HalaqohController::class)->name('halaqoh');

    // Route Kehadiran
    Route::get('kehadiran', KehadiranController::class)->name('kehadiran');
});