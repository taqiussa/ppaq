<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;

class HalaqohController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return inertia('Santri/Halaqoh', ['listHalaqoh' => Halaqoh::whereNis(auth()->user()->nis)->orderByDesc('tanggal')->get()]);
    }
}
