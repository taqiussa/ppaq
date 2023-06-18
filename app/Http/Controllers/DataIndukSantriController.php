<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\InitTrait;

class DataIndukSantriController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/DataIndukSantri',
            [
                'listSantri' => User::where('nis', '!=', null)
                    ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                    ->with([
                        'biodata',
                        'alamat'
                    ])
                    ->orderBy('name')
                    ->get(),
                'initTahun' => $this->data_tahun_hijriyah(),
                'initBulan' => $this->data_bulan_hijriyah()
            ]
        );
    }
}
