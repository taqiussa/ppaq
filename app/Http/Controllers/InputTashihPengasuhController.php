<?php

namespace App\Http\Controllers;

use App\Models\TashihPengasuh;
use App\Traits\InitTrait;

class InputTashihPengasuhController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/InputTashihPengasuh',
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
            'nis' => 'required',
            'bulan' => 'required',
            'juz' => 'required',
        ]);

        TashihPengasuh::create([
            'tanggal' => request('tanggal'),
            'tahun' => request('tahun'),
            'nis' => request('nis'),
            'bulan' => request('bulan'),
            'juz' => request('juz'),
        ]);

        return to_route('input-tashih-pengasuh');
    }

    public function hapus()
    {
        TashihPengasuh::destroy(request('id'));

        return to_route('input-tashih-pengasuh');
    }
}
