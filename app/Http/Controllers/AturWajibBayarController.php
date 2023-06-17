<?php

namespace App\Http\Controllers;

use App\Models\KategoriPembayaran;
use App\Models\WajibBayar;
use App\Traits\InitTrait;

class AturWajibBayarController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('Bendahara/AturWajibBayar', [
            'initTahun' => $this->data_tahun_hijriyah(),
            'listKategori' => KategoriPembayaran::get()
        ]);
    }

    public function simpan()
    {
        request()->validate([
            'kategoriPembayaranId' => 'required',
            'tahun' => 'required',
            'jumlah' => 'required'
        ]);

        WajibBayar::create([
            'tahun' => request('tahun'),
            'jumlah' => ambilAngka(request('jumlah')),
            'kategori_pembayaran_id' => request('kategoriPembayaranId'),
            'jenis_kelamin' => auth()->user()->jenis_kelamin,
        ]);

        return to_route('atur-wajib-bayar');
    }

    public function hapus()
    {
        WajibBayar::destroy(request('id'));

        return to_route('atur-wajib-bayar');
    }
}
