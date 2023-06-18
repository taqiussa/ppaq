<?php

namespace App\Http\Controllers;

use App\Models\Bilhifzhi;
use App\Models\Kategori;
use App\Traits\InitTrait;

class InputBilhifzhiController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('Pengurus/InputBilhifzhi', [
            'initTahun' => $this->data_tahun_hijriyah(),
            'initBulan' => $this->data_bulan_hijriyah(),
            'listKategori' => Kategori::get(),
            'listSantri' => $this->data_all_santri(),
        ]);
    }

    public function simpan()
    {
        request()->validate([
            'tanggal' => 'required',
            'tahun' => 'required',
            'nis' => 'required',
            'bulan' => 'required',
            'kategoriId' => 'required',
            'juz' => 'required',
        ]);

        Bilhifzhi::create([
            'tanggal' => request('tanggal'),
            'tahun' => request('tahun'),
            'nis' => request('nis'),
            'bulan' => request('bulan'),
            'kategori_id' => request('kategoriId'),
            'juz' => request('juz'),
        ]);

        return to_route('input-bilhifzhi');

    }

    public function hapus()
    {
        Bilhifzhi::destroy(request('id'));

        return to_route('input-bilhifzhi');
    }
}
