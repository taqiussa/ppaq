<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;
use App\Traits\InitTrait;

class InputHalaqohController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/InputHalaqoh',
            [
                'initTahun' => $this->data_tahun_hijriyah(),
                'initBulan' => $this->data_bulan_hijriyah(),
                'listSantri' => $this->data_all_santri()
            ]
        );
    }

    public function simpan()
    {
        request()->validate([
            'tanggal' => 'required',
            'tahun' => 'required',
            'bulan' => 'required',
            'nis' => 'required',
            'kategoriId' => 'required',
            'juz' => 'required'
        ]);

        Halaqoh::create([
            'tanggal' => request('tanggal'),
            'tahun' => request('tahun'),
            'bulan' => request('bulan'),
            'nis' => request('nis'),
            'juz' => request('juz'),
            'kategori_id' => request('kategoriId'),
        ]);

        return to_route('input-halaqoh');
    }

    public function hapus()
    {
        Halaqoh::destroy(request('id'));

        return to_route('input-halaqoh');
    }
}
