<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;
class AdministrasiController extends Controller
{
    use InitTrait;

    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return inertia('Santri/Administrasi', ['initTahun' => $this->data_tahun_hijriyah()]);
    }
}
