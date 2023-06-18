<?php

namespace App\Http\Controllers;

use App\Models\TesSemester;
use App\Traits\InitTrait;

class InputTesSemesterController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('Pengurus/InputTesSemester', [
            'initTahun' => $this->data_tahun_hijriyah(),
            'initBulan' => $this->data_bulan_hijriyah(),
            'listSantri' => $this->data_all_santri()
        ]);
    }

    public function simpan()
    {
        $validated = request()->validate([
            'nis' => 'required',
            'tahun' => 'required',
            'bulan' => 'required',
            'semester' => 'required',
            'juz' => 'required',
            'tanggal' => 'required'
        ]);

        $validated['user_id'] = auth()->user()->id;
        TesSemester::create($validated);

        return to_route('input-tes-semester');
    }

    public function hapus()
    {
        TesSemester::destroy(request('id'));

        return to_route('input-tes-semester');
    }
}
