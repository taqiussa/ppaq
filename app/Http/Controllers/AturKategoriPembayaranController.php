<?php

namespace App\Http\Controllers;

use App\Models\KategoriPembayaran;
use App\Traits\InitTrait;

class AturKategoriPembayaranController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('Bendahara/AturKategoriPembayaran', ['listKategori' => KategoriPembayaran::orderBy('nama')->get()]);
    }

    public function simpan()
    {

        $validate = request()->validate(['nama' => 'required'], ['nama.required' => 'silahkan isi kategori pembayaran']);

        KategoriPembayaran::create(['nama' => request('nama')]);

        return to_route('atur-kategori-pembayaran');
    }

    public function hapus()
    {
        KategoriPembayaran::destroy(request('id'));

        return to_route('atur-kategori-pembayaran');
    }
}
