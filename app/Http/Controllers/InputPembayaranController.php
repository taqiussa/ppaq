<?php

namespace App\Http\Controllers;

use App\Models\Pembayaran;
use App\Traits\InitTrait;

class InputPembayaranController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('Bendahara/InputPembayaran', [
            'initTahun' => $this->data_tahun_hijriyah(),
            'listSantri' => $this->data_all_santri()
        ]);
    }

    public function simpan()
    {
        request()->validate([
            'nis' => 'required',
            'kategoriPembayaranId' => 'required',
            'jumlah' => 'required',
            'tahun' => 'required'
        ]);

        Pembayaran::create(
            [
                'user_id' => auth()->user()->id,
                'nis' => request('nis'),
                'kategori_pembayaran_id' => request('kategoriPembayaranId'),
                'tahun' => request('tahun'),
                'jumlah' => ambilAngka(request('jumlah')),
            ]
        );

        return to_route('input-pembayaran');
    }

    public function hapus()
    {
        Pembayaran::destroy(request('id'));

        return to_route('input-pembayaran');
    }
}
