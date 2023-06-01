<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;
use Illuminate\Http\Request;

class AdministrasiController extends Controller
{
    use InitTrait;

    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('Santri/Administrasi', ['initTahun' => $this->data_tahun_hijriyah()]);
    }
}
