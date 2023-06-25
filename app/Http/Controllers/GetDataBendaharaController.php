<?php

namespace App\Http\Controllers;

use App\Models\Pembayaran;
use App\Models\WajibBayar;

class GetDataBendaharaController extends Controller
{
    public function get_all_pembayaran()
    {
        if (auth()->user()->hasRole('Pengasuh')) {
            $listPembayaran = Pembayaran::whereTahun(request('tahun'))
                ->with([
                    'user' => fn ($q) => $q->select('nis', 'name', 'jenis_kelamin'),
                    'kategoriPembayaran' => fn ($q) => $q->select('id', 'nama'),
                ])
                ->latest()
                ->get()
                ->sortBy('user.jenis_kelamin')
                ->values();
        } else {
            $listPembayaran = Pembayaran::whereTahun(request('tahun'))
                ->whereHas('user', fn ($q) => $q->whereJenisKelamin(auth()->user()->jenis_kelamin))
                ->with([
                    'user' => fn ($q) => $q->select('nis', 'name'),
                    'kategoriPembayaran' => fn ($q) => $q->select('id', 'nama'),
                ])
                ->latest()
                ->get();
        }
        return response()->json([
            'listPembayaran' => $listPembayaran
        ]);
    }

    public function get_pembayaran()
    {
        return response()->json([
            'listPembayaran' => Pembayaran::whereTahun(request('tahun'))
                ->whereNis(request('nis'))
                ->with(['kategoriPembayaran'])
                ->get()
        ]);
    }

    public function get_wajib_bayar()
    {
        return response()->json([
            'listWajibBayar' => WajibBayar::whereTahun(request('tahun'))
                ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                ->with(['kategoriPembayaran'])
                ->get()
        ]);
    }
}
