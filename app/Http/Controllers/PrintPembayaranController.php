<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class PrintPembayaranController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Bendahara/PrintPembayaran',
            [
                'initTahun' => $this->data_tahun_hijriyah(),
                'initBulan' => $this->data_bulan_hijriyah()
            ]
        );
    }
}
