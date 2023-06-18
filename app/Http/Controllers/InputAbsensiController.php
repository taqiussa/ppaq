<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Traits\InitTrait;

class InputAbsensiController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('InputAbsensi', [
            'initTahun' => $this->data_tahun_hijriyah(),
            'initBulan' => $this->data_bulan_hijriyah(),
            'listSantri' => $this->data_all_santri()
        ]);
    }

    public function simpan()
    {
        request()->validate([
            'tahun' => 'required',
            'nis' => 'required',
            'bulan' => 'required',
            'hadir' => 'required',
            'izin' => 'required',
            'alpha' => 'required',
        ]);

        Absensi::create([
            'tahun' => request('tahun'),
            'nis' => request('nis'),
            'bulan' => request('bulan'),
            'hadir' => request('hadir'),
            'izin' => request('izin'),
            'alpha' => request('alpha'),
            'user_id' => auth()->user()->id
        ]);
    }

    public function hapus()
    {
        Absensi::destroy(request('id'));

        return to_route('input-absensi');
    }
}
