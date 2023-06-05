<?php

namespace App\Http\Controllers;

use App\Models\Binnadzor;
use App\Traits\InitTrait;

class InputBinnadzorController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('InputBinnadzor', [
            'initTahun' => $this->data_tahun_hijriyah(),
            'initBulan' => $this->data_bulan_hijriyah(),
            'listSantri' => $this->data_all_santri()
        ]);
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

        Binnadzor::create([
            'tanggal' => request('tanggal'),
            'tahun' => request('tahun'),
            'nis' => request('nis'),
            'bulan' => request('bulan'),
            'juz' => request('juz'),
        ]);
    }

    public function hapus()
    {
        Binnadzor::destroy(request('id'));

        return to_route('input-binnadzor');
    }
}
