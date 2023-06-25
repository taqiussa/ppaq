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
        
    }
}
