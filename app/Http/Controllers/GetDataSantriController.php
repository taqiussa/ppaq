<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Pembayaran;
use App\Models\WajibBayar;

class GetDataSantriController extends Controller
{
    public function get_administrasi()
    {
        return response()->json([
            'listPembayaran' => Pembayaran::whereTahun(request('tahun'))
                ->whereNis(auth()->user()->nis)
                ->get(),
            'listWajibBayar' => WajibBayar::whereTahun(request('tahun'))
                ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                ->with([
                    'kategoriPembayaran' => fn ($q) => $q->select('id', 'nama'),
                ])
                ->orderBy('kategori_pembayaran_id')
                ->get()
        ]);
    }

    public function get_kehadiran()
    {
        return response()->json([
            'listAbsensi' => Absensi::whereTahun(request('tahun'))
                ->whereNis(auth()->user()->nis)
                ->get()
        ]);
    }
}
