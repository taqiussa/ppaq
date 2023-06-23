<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class PrintTesSemesterController extends Controller
{
    use InitTrait;

    public function index()
    {
        return inertia('Pengurus/PrintTesSemester');
    }

    public function print()
    {
        $data  =
        [
            'listSantri' => 
        ]
    }
}
