<?php

namespace App\Http\Controllers;

use App\Imports\ImportSantri;
use Maatwebsite\Excel\Facades\Excel;

class UploadSantriController extends Controller
{
    public function index()
    {
        return inertia('Admin/UploadSantri');
    }

    public function upload()
    {
        request()->validate(['fileUpload' => 'required|mimes:xls,xlsx']);

        set_time_limit(0);

        Excel::import(new ImportSantri(), request('fileUpload'));

        to_route('upload-santri');
    }
}
