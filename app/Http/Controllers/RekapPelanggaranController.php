<?php

namespace App\Http\Controllers;

use App\Models\PenilaianSkor;
use App\Traits\InitTrait;

class RekapPelanggaranController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia(
            'Pengurus/RekapPelanggaran',
            [
                'initTahun' => $this->data_tahun_hijriyah()
            ]
        );
    }

    public function hapus()
    {
        PenilaianSkor::destroy(request('id'));

        return to_route('rekap-pelanggaran');
    }
}
