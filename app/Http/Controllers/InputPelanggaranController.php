<?php

namespace App\Http\Controllers;

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
}
