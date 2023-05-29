<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class AturKategoriPembayaranController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('Bendahara/AturKategoriPembayaran');
    }
}
