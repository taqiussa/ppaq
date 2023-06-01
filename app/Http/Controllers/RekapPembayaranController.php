<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class RekapPembayaranController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('Bendahara/RekapPembayaran', ['initTahun' => $this->data_tahun_hijriyah()]);
    }
}
