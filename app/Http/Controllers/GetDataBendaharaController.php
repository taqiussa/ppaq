<?php

namespace App\Http\Controllers;

use App\Models\WajibBayar;

class GetDataBendaharaController extends Controller
{
    public function get_wajib_bayar(){
        return response()->json([
            'listWajibBayar' => WajibBayar::whereTahun(request('tahun'))
            ->with(['kategoriPembayaran'])
            ->get()
        ]);
    }
}
