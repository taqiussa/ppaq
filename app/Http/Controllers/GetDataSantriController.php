<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Pembayaran;
use App\Models\WajibBayar;
use App\Traits\InitTrait;

class GetDataSantriController extends Controller
{
    use InitTrait;

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

    public function get_skor()
    {
        return response()->json([
            'listSantri' => $this->data_all_santri_with_skor()
        ]);
    }
}
