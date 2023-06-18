<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadSantriController;

// Role Admin
Route::middleware(['auth', 'role:Admin'])->group(function () {

    Route::controller(UploadSantriController::class)->group(function () {
        Route::get('upload-santri', 'index')->name('upload-santri');
        Route::post('upload-santri', 'upload')->name('upload-santri.upload');
    });
});
