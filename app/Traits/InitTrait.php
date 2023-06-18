<?php

namespace App\Traits;

use App\Models\User;

trait InitTrait
{
    public function data_all_alumni()
    {
        return User::whereNotNull('nis')
            ->whereAktif(false)
            ->with([
                'alamat',
                'alumni',
                'biodata',
            ])
            ->orderBy('name')
            ->get();
    }

    public function data_alumni()
    {
        return User::whereNotNull('nis')
            ->whereJenisKelamin(auth()->user()->jenis_kelamin)
            ->whereAktif(false)
            ->with([
                'alamat',
                'alumni',
                'biodata',
            ])
            ->orderBy('name')
            ->get();
    }

    public function data_all_santri()
    {
        return User::whereNotNull('nis')
            ->whereJenisKelamin(auth()->user()->jenis_kelamin)
            ->whereAktif(true)
            ->with([
                'biodata',
                'alamat'
            ])
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
