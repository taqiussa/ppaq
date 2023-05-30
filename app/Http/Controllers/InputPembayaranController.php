<?php

namespace App\Http\Controllers;

class InputPembayaranController extends Controller
{
    public function index()
    {
        return inertia('Bendahara/InputPembayaran');
    }

    public function simpan()
    {
        request()->validate([
            'nis' => 'required',
            'kategoriPembayaranId' => 'required',
            'jumlah' => 'required',
            'tahun' => 'required'
        ]);

        
    }
}
