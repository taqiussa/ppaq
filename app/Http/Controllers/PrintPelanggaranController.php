<?php

namespace App\Http\Controllers;

use App\Models\PenilaianSkor;
use App\Traits\InitTrait;

class PrintPelanggaranController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/PrintPelanggaran',
            [
                'initTahun' => $this->data_tahun_hijriyah(),
                'initBulan' => $this->data_bulan_hijriyah(),
            ]
        );
    }

    public function print_semua()
    {
        if (auth()->user()->hasRole('Pengasuh')) {

            $list = PenilaianSkor::whereTahun(request('tahun'))
                ->whereBulan(request('bulan'))
                ->with([
                    'user',
                    'skors'
                ])
                ->orderByDesc('tanggal')
                ->get()
                ->sortBy(['user.jenis_kelamin', 'user.name'])
                ->values();
        } else {
            $list = PenilaianSkor::whereTahun(request('tahun'))
                ->whereBulan(request('bulan'))
                ->whereHas('user', fn ($q) => $q->whereJenisKelamin(auth()->user()->jenis_kelamin))
                ->with([
                    'user',
                    'skors'
                ])
                ->orderByDesc('tanggal')
                ->get()
                ->sortBy(['user.name'])
                ->values();
        }

        $data = [
            'listPelanggaran' => $list,
            'bulan' => request('bulan'),
            'tahun' => request('tahun')
        ];

        return view('print.print-pelanggaran-semua', $data);
    }
}
