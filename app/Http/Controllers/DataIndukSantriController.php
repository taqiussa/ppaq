<?php

namespace App\Http\Controllers;

use App\Models\User;

class DataIndukSantriController extends Controller
{
    public function index()
    {
        return inertia(
            'Pengurus/DataIndukSantri',
            [
                'listSantri' => User::where('nis', '!=', null)
                    ->with([
                        'biodata',
                        'alamat'
                    ])
                    ->orderBy('name')
                    ->get()
            ]
        );
    }
}
