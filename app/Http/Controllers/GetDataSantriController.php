<?php

namespace App\Http\Controllers;

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
                ->with([
                    'kategoriPembayaran' => fn ($q) => $q->select('id', 'nama'),
                ])
                ->get()
        ]);
    }
}
