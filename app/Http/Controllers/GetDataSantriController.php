<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Halaqoh;
use App\Models\Bilhifzhi;
use App\Models\Binnadzor;
use App\Models\Pembayaran;
use App\Models\WajibBayar;
use App\Models\TesSemester;
use App\Models\TashihPengasuh;

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

    public function get_kehadiran()
    {
        return response()->json([
            'listAbsensi' => Absensi::whereTahun(request('tahun'))
                ->whereNis(auth()->user()->nis)
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
