<?php

namespace App\Http\Controllers;

use App\Models\Skor;

class InputDataSkorController extends Controller
{
    public function index()
    {
        return inertia(
            'Pengurus/InputDataSkor',
            [
                'listDataSkor' => Skor::orderBy('skor')->get()
            ]
        );
    }

    public function simpan()
    {
        $validated = request()->validate([
            'keterangan' => 'required',
            'skor' => 'required'
        ]);

        Skor::create($validated);

        return to_route('input-data-skor');
    }

    public function hapus()
    {
        Skor::destroy(request('id'));

        return to_route('input-data-skor');
    }
}
