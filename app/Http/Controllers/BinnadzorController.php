<?php

namespace App\Http\Controllers;

use App\Models\Binnadzor;

class BinnadzorController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return inertia('Santri/Binnadzor', ['listBinnadzor' => Binnadzor::whereNis(auth()->user()->nis)->orderByDesc('tanggal')->get()]);
    }
}
