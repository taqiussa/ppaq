<?php

namespace App\Imports;

use App\Models\Alamat;
use App\Models\Biodata;
use App\Models\User;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ImportSantri implements ToCollection, WithHeadingRow, SkipsOnError, SkipsEmptyRows, SkipsOnFailure
{
    use SkipsErrors, SkipsFailures;

    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
        foreach ($collection as $row) {
            $user = User::create([
                'name' => $row['nama'],
                'nis' => $row['nis'],
                'jenis_kelamin' => $row['jenis_kelamin'],
                'password' => bcrypt('12345678'),
                'username' => null,
                'foto' => null
            ]);

            $user->assignRole('Santri');

            Biodata::create([
                'nis' => $row['nis'],
                'nisn' => $row['nisn'] ?? null,
                'nik' => $row['nik'],
                'tempat_lahir' => $row['tempat_lahir'],
                'tanggal_lahir' => $row['tanggal_lahir'],
                'no_kk' => $row['no_kk'],
                'nama_ayah' => $row['nama_ayah'],
                'nik_ayah' => $row['nik_ayah'],
                'nama_ibu' => $row['nama_ibu'],
                'nik_ibu' => $row['nik_ibu'],
                'nama_wali' => $row['nama_wali'],
                'nik_wali' => $row['nik_wali'],
            ]);

            Alamat::create([
                'nis' => $row['nis'],
                'alamat' => $row['alamat'],
                'desa' => $row['desa'],
                'kecamatan' => $row['kecamatan'],
                'kabupaten' => $row['kabupaten'],
                'provinsi' => $row['provinsi'],
            ]);
        }
    }
}
