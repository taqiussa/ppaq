<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class KehadiranController extends Controller
{
    use InitTrait;

    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return inertia('Santri/Kehadiran', ['initTahun' => $this->data_tahun_hijriyah()]);
    }
}
