<?php

namespace App\Http\Controllers;

use App\Models\Alumni;
use App\Models\User;
use App\Traits\InitTrait;

class AturBoyongController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/AturBoyong',
            [
                'listSantri' => $this->data_all_santri(),
                'initBulan' => $this->data_bulan_hijriyah(),
                'initTahun' => $this->data_tahun_hijriyah()
            ]
        );
    }

    public function simpan()
    {
        request()->validate([
            'nis' => 'required',
            'tanggal' => 'required',
            'bulan' => 'required',
            'tahun' => 'required'
        ]);
        try {

            User::whereNis(request('nis'))->update(['aktif' => 0]);

            Alumni::create([
                'nis' => request('nis'),
                'tanggal' => request('tanggal'),
                'bulan' => request('bulan'),
                'tahun' => request('tahun'),
            ]);

            return to_route('atur-boyong');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
