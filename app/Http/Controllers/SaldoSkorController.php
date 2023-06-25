<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class SaldoSkorController extends Controller
{
    use InitTrait;

    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return inertia('Pengurus/SaldoSkor', ['initTahun' => $this->data_tahun_hijriyah()]);
    }
}
