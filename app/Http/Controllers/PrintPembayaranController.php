<?php

namespace App\Http\Controllers;

use App\Models\KategoriPembayaran;
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
                'initBulan' => $this->data_bulan_hijriyah(),
                'listKategori' => KategoriPembayaran::get(),
            ]
        );
    }

    public function print_semua()
    {
        $data =
            [
                'listSantri' => $this->data_all_santri_with_pembayaran(),
                'wajibBayar' => $this->data_wajib_bayar()->first()->jumlah
            ];

        return view('print.print-pembayaran-semua', $data);
    }
}
