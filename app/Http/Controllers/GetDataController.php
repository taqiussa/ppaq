<?php

namespace App\Http\Controllers;

use App\Models\Absensi;

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
}
