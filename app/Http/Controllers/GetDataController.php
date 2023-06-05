<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Binnadzor;

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

    public function get_binnadzor()
    {
        return response()->json([
            'listBinnadzor' => Binnadzor::whereNis(request('nis'))
                ->latest()
                ->get()
        ]);
    }
}
