<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Halaqoh;
use App\Models\Bilhifzhi;
use App\Models\Binnadzor;
use App\Models\TesSemester;
use App\Models\PenilaianSkor;
use App\Models\TashihPengasuh;

class GetDataController extends Controller
{
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
        return response()->json([
            'listPelanggaran' => PenilaianSkor::whereTahun(request('tahun'))
                ->with([
                    'skors',
                    'user'
                ])
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
