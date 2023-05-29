<?php

namespace App\Traits;

trait InitTrait
{
    public function data_tahun_hijriyah()
    {
        $tahunIni = now()->toHijri()->format('Y');
        $bulanIni = now()->toHijri()->format('m');
        if ($bulanIni < 10 ) {
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
