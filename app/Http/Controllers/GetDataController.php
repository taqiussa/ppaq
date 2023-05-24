<?php

namespace App\Http\Controllers;

class GetDataController extends Controller
{
    public function get_data_induk_santri()
    {
        return response()->json([
            'listSantri'
        ]);
    }
}
