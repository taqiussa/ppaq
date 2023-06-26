<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\PenilaianSkor;
use App\Traits\InitTrait;

class GetDataController extends Controller
{
    use InitTrait;

    public function get_absensi()
    {
        return response()->json([
            'listAbsensi' => Absensi::whereTahun(request('tahun'))
                ->whereBulan(request('bulan'))
                ->get()
        ]);
    }

    public function get_pelanggaran()
    {
        if (auth()->user()->hasRole('Pengasuh')) {
            $list = PenilaianSkor::whereTahun(request('tahun'))
                ->with([
                    'skors',
                    'user'
                ])
                ->get()
                ->sortBy(['user.jenis_kelamin', 'user.name'])
                ->values();
        } else {

            $list = PenilaianSkor::whereTahun(request('tahun'))
                ->whereHas('user', fn ($q) => $q->whereJenisKelamin(auth()->user()->jenis_kelamin))
                ->with([
                    'skors',
                    'user'
                ])
                ->get()
                ->sortBy('user.name')
                ->values();
        }

        return response()->json([
            'listPelanggaran' => $list
        ]);
    }

    public function get_skor()
    {
        return response()->json([
            'listSantri' => $this->data_all_santri_with_skor()
        ]);
    }
}
