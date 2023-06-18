<?php

namespace App\Http\Controllers;

use App\Models\Bilhifzhi;

class BilhifzhiController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return inertia(
            'Santri/Bilhifzhi',
            [
                'listBilhifzhi'
                =>
                Bilhifzhi::whereNis(auth()->user()->nis)
                    ->orderByDesc('tanggal')->get()
            ]
        );
    }
}
