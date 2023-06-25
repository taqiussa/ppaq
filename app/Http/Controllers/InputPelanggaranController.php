<?php

namespace App\Http\Controllers;

use App\Models\PenilaianSkor;
use App\Models\Skor;
use App\Traits\InitTrait;

class InputPelanggaranController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/InputPelanggaran',
            [
                'initTahun' => $this->data_tahun_hijriyah(),
                'initBulan' => $this->data_bulan_hijriyah(),
                'listPeraturan' => Skor::orderBy('skor')->get(),
                'listSantri' => $this->data_all_santri()
            ]
        );
    }

    public function simpan()
    {
        request()->validate([
            'nis' => 'required',
            'tanggal' => 'required',
            'skorId' => 'required',
            'bulan' => 'required',
            'tahun' => 'required',
        ]);

        $skor = Skor::find(request('skorId'));

        PenilaianSkor::create([
            'nis' => request('nis'),
            'tanggal' => request('tanggal'),
            'bulan' => request('bulan'),
            'tahun' => request('tahun'),
            'skor' => $skor->skor,
            'skor_id' => request('skorId'),
        ]);

        return to_route('input-pelanggaran');
    }

}
