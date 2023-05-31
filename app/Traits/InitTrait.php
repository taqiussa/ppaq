<?php

namespace App\Traits;

use App\Models\User;

trait InitTrait
{
    public function data_all_santri()
    {
        return User::where('nis', '!=', null)
            ->orderBy('jenis_kelamin')
            ->orderBy('name')
            ->get();
    }

    public function data_tahun_hijriyah()
    {
        $tahunIni = now()->toHijri()->format('Y');
        $bulanIni = now()->toHijri()->format('m');
        if ($bulanIni < 10) {
            $tahunAjaran = (intval($tahunIni) - 1) . ' / ' . intval($tahunIni);
        } else {
            $tahunAjaran = intval($tahunIni) . ' / ' . (intval($tahunIni) + 1);
        }
        return $tahunAjaran;
    }

    public function data_bulan_hijriyah()
    {
        return now()->toHijri()->format('m');
    }
}
