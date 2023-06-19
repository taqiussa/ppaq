<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class PrintPendidikanController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/PrintPendidikan',
            [
                'initTahun' => $this->data_tahun_hijriyah(),
                'initBulan' => $this->data_bulan_hijriyah()
            ]
        );
    }
}
