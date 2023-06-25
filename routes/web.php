<?php

use App\Http\Controllers\AturBoyongController;
use App\Http\Controllers\DataIndukAlumniController;
use App\Http\Controllers\DataIndukSantriController;
use App\Http\Controllers\InputAbsensiController;
use App\Http\Controllers\InputBilhifzhiController;
use App\Http\Controllers\InputBinnadzorController;
use App\Http\Controllers\InputDataSkorController;
use App\Http\Controllers\InputHalaqohController;
use App\Http\Controllers\InputPelanggaranController;
use App\Http\Controllers\InputTashihPengasuhController;
use App\Http\Controllers\InputTesSemesterController;
use App\Http\Controllers\PrintAbsensiController;
use App\Http\Controllers\PrintPembayaranController;
use App\Http\Controllers\PrintPendidikanController;
use App\Http\Controllers\PrintTesSemesterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TambahAlumniController;
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

Route::get('/privasi', function () {
    return inertia('Privasi');
});

Route::get('/dashboard', function () {
    return inertia('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Role Semua
Route::middleware(['auth', 'role:Admin|Ketua|Bendahara|Pengasuh|Pengurus|Keamanan|Pendidikan'])->group(function () {

    // Route Atur Boyong
    Route::controller(AturBoyongController::class)->group(function () {
        Route::get('atur-boyong', 'index')->name('atur-boyong');
        Route::post('atur-boyong', 'simpan')->name('atur-boyong.simpan');
    });

    // Route Data Induk Alumni
    Route::get('data-induk-alumni', DataIndukAlumniController::class)->name('data-induk-alumni');

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

    // Route Input Halaqoh
    Route::controller(InputHalaqohController::class)->group(function () {
        Route::get('input-halaqoh', 'index')->name('input-halaqoh');
        Route::post('input-halaqoh', 'simpan')->name('input-halaqoh.simpan');
        Route::delete('input-halaqoh', 'hapus')->name('input-halaqoh.hapus');
    });

    // Route Input Pelanggaran
    Route::controller(InputPelanggaranController::class)->group(function () {
        Route::get('input-pelanggaran', 'index')->name('input-pelanggaran');
        Route::post('input-pelanggaran', 'simpan')->name('input-pelanggaran.simpan');
        Route::delete('input-pelanggaran', 'hapus')->name('input-pelanggaran.hapus');
    });

    // Route Input Peraturan (Data Skor)
    Route::controller(InputDataSkorController::class)->group(function () {
        Route::get('input-data-skor', 'index')->name('input-data-skor');
        Route::post('input-data-skor', 'simpan')->name('input-data-skor.simpan');
        Route::delete('input-data-skor', 'hapus')->name('input-data-skor.hapus');
    });

    // Route Input Tashih Pengasuh
    Route::controller(InputTashihPengasuhController::class)->group(function () {
        Route::get('input-tashih-pengasuh', 'index')->name('input-tashih-pengasuh');
        Route::post('input-tashih-pengasuh', 'simpan')->name('input-tashih-pengasuh.simpan');
        Route::delete('input-tashih-pengasuh', 'hapus')->name('input-tashih-pengasuh.hapus');
    });

    // Route Input Tes Semester
    Route::controller(InputTesSemesterController::class)->group(function () {
        Route::get('input-tes-semester', 'index')->name('input-tes-semester');
        Route::post('input-tes-semester', 'simpan')->name('input-tes-semester.simpan');
        Route::delete('input-tes-semester', 'hapus')->name('input-tes-semester.hapus');
    });

    // Route Tambah Alumni
    Route::controller(TambahAlumniController::class)->group(function () {
        Route::get('tambah-alumni', 'index')->name('tambah-alumni');
        Route::post('tambah-alumni', 'simpan')->name('tambah-alumni.simpan');

        //Edit
        Route::get('edit-alumni', 'edit')->name('edit-alumni');
        Route::post('edit-alumni', 'update')->name('edit-alumni.update');
    });

    // Route Tambah Santri
    Route::controller(TambahSantriController::class)->group(function () {
        Route::get('tambah-santri', 'index')->name('tambah-santri');
        Route::post('tambah-santri', 'simpan')->name('tambah-santri.simpan');

        //Edit
        Route::get('edit-santri', 'edit')->name('edit-santri');
        Route::post('edit-santri', 'update')->name('edit-santri.update');
    });

    // Route Print Absensi
    Route::controller(PrintAbsensiController::class)->group(function () {
        Route::get('print-absensi', 'index')->name('print-absensi');
        Route::get('print-absensi/print-semua', 'print_semua')->name('print-absensi.print-semua');
    });

    // Route Print Pembayaran
    Route::controller(PrintPembayaranController::class)->group(function () {
        Route::get('print-pembayaran', 'index')->name('print-pembayaran');
        Route::get('print-pembayaran/print-semua', 'print_semua')->name('print-pembayaran.print-semua');
    });

    // Route Print Pendidikan
    Route::controller(PrintPendidikanController::class)->group(function () {
        Route::get('print-pendidikan', 'index')->name('print-pendidikan');
        Route::get('print-pendidikan/print-semua', 'print_semua')->name('print-pendidikan.print-semua');
    });

    // Route Print Tes Semester
    Route::controller(PrintTesSemesterController::class)->group(function () {
        Route::get('print-tes-semester', 'index')->name('print-tes-semester');
        Route::get('print-tes-semester/print', 'print')->name('print-tes-semester.print');
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
