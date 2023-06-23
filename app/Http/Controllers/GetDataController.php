<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Bilhifzhi;
use App\Models\Binnadzor;
use App\Models\Halaqoh;
use App\Models\TashihPengasuh;
use App\Models\TesSemester;

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

    public function get_bilhifzhi()
    {
        return response()->json([
            'listBilhifzhi' => Bilhifzhi::whereNis(request('nis'))
                ->whereKategoriId(request('kategoriId'))
                ->latest()
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

    public function get_halaqoh()
    {
        return response()->json([
            'listHalaqoh' => Halaqoh::whereNis(request('nis'))
                ->whereKategoriId(request('kategoriId'))
                ->latest()
                ->get()
        ]);
    }

    public function get_tashih_pengasuh()
    {
        return response()->json([
            'listTashih' => TashihPengasuh::whereNis(request('nis'))
                ->get()
        ]);
    }

    public function get_tes_semester()
    {
        return response()->json([
            'listTes' => TesSemester::whereNis(request('nis'))
                ->get()
        ]);
    }
}
