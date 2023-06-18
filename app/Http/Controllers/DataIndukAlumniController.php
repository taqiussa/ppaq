<?php

namespace App\Http\Controllers;

use App\Traits\InitTrait;

class DataIndukAlumniController extends Controller
{
    use InitTrait;

    public function __invoke()
    {
        return inertia('Pengurus/DataIndukAlumni',['listSantri' => $this->data_alumni() ]);
    }
}
