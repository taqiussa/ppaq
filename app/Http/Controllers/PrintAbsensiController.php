<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class PrintAbsensiController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/PrintAbsensi',
            [
                'initTahun' => $this->data_tahun_hijriyah(),
                'initBulan' => $this->data_bulan_hijriyah(),
            ]
        );
    }

    public function print_semua()
    {

        $data = [
            'bulan' => namaBulanHijriyah(request('bulan')),
            'tahun' => request('tahun'),
            'listSantri' => $this->data_all_santri_with_absensi()
        ];

        return view('print.print-absensi-semua', $data);
    }
}
