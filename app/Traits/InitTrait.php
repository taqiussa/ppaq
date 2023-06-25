<?php

namespace App\Traits;

use App\Models\User;
use App\Models\WajibBayar;

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
        if (auth()->user()->hasRole('Pengasuh')) {

            $user = User::whereNotNull('nis')
                ->whereAktif(false)
                ->with([
                    'alamat',
                    'alumni',
                    'biodata',
                ])
                ->orderBy('jenis_kelamin')
                ->orderBy('name')
                ->get();
        } else {
            $user = User::whereNotNull('nis')
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
        return $user;
    }

    public function data_all_santri()
    {
        if (auth()->user()->hasRole('Pengasuh')) {
            $user =  User::whereNotNull('nis')
                ->whereAktif(true)
                ->with([
                    'biodata',
                    'alamat'
                ])
                ->orderBy('jenis_kelamin')
                ->orderBy('name')
                ->get();
        } else {
            $user =  User::whereNotNull('nis')
                ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                ->whereAktif(true)
                ->with([
                    'biodata',
                    'alamat'
                ])
                ->orderBy('name')
                ->get();
        }

        return $user;
    }

    public function data_all_santri_with_absensi()
    {
        if (auth()->user()->hasRole('Pengasuh')) {

            $user = User::whereNotNull('nis')
                ->whereAktif(true)
                ->with([
                    'absensi' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan'))
                ])
                ->orderBy('jenis_kelamin')
                ->orderBy('name')
                ->get();
        } else {
            $user = User::whereNotNull('nis')
                ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                ->whereAktif(true)
                ->with([
                    'absensi' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan'))
                ])
                ->orderBy('name')
                ->get();
        }
        return $user;
    }

    public function data_all_santri_with_pembayaran()
    {
        if (auth()->user()->hasRole('Pengasuh')) {
            $user = User::whereNotNull('nis')
                ->whereAktif(true)
                ->with([
                    'pembayaran' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereKategoriPembayaranId(request('kategoriPembayaranId'))
                ])
                ->orderBy('jenis_kelamin')
                ->orderBy('name')
                ->get();
        } else {
            $user = User::whereNotNull('nis')
                ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                ->whereAktif(true)
                ->with([
                    'pembayaran' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereKategoriPembayaranId(request('kategoriPembayaranId'))
                ])
                ->orderBy('name')
                ->get();
        }
        return $user;
    }

    public function data_all_santri_with_pendidikan()
    {
        if (auth()->user()->hasRole('Pengasuh')) {
            $user = User::whereNotNull('nis')
                ->whereAktif(true)
                ->with([
                    'bilhifzhi' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan')),
                    'binnadzor' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan')),
                    'halaqoh' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan')),
                    'tashih' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan')),
                ])
                ->orderBy('jenis_kelamin')
                ->orderBy('name')
                ->get();
        } else {
            $user = User::whereNotNull('nis')
                ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                ->whereAktif(true)
                ->with([
                    'bilhifzhi' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan')),
                    'binnadzor' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan')),
                    'halaqoh' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan')),
                    'tashih' => fn ($q) => $q->whereTahun(request('tahun'))
                        ->whereBulan(request('bulan')),
                ])
                ->orderBy('name')
                ->get();
        }
        return $user;
    }

    public function data_all_santri_with_skor()
    {
        if (auth()->user()->hasRole('Pengasuh')) {
            $user = User::whereNotNull('nis')
                ->whereAktif(true)
                ->with([
                    'skors' => fn ($q) => $q->whereTahun(request('tahun'))
                ])
                ->orderBy('jenis_kelamin')
                ->orderBy('name')
                ->get();
        } else {
            $user = User::whereNotNull('nis')
                ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                ->whereAktif(true)
                ->with([
                    'skors' => fn ($q) => $q->whereTahun(request('tahun'))
                ])
                ->orderBy('name')
                ->get();
        }

        return $user;
    }

    public function data_all_santri_with_tes_semester()
    {
        if (auth()->user()->hasRole('Pengasuh')) {
            $user = User::whereNotNull('nis')
                ->whereAktif(true)
                ->with([
                    'tesSemester'
                ])
                ->orderBy('jenis_kelamin')
                ->orderBy('name')
                ->get();
        } else {
            $user = User::whereNotNull('nis')
                ->whereJenisKelamin(auth()->user()->jenis_kelamin)
                ->whereAktif(true)
                ->with([
                    'tesSemester'
                ])
                ->orderBy('name')
                ->get();
        }

        return $user;
    }

    public function data_bulan_hijriyah()
    {
        return now()->toHijri()->format('m');
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

    public function data_wajib_bayar()
    {
        return WajibBayar::whereTahun(request('tahun'))
            ->whereKategoriPembayaranId(request('kategoriPembayaranId'))
            ->with([
                'kategoriPembayaran'
            ])
            ->get();
    }
}
