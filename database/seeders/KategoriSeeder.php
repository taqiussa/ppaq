<?php

namespace Database\Seeders;

use App\Models\Kategori;
use App\Models\KategoriPembayaran;
use App\Models\WajibBayar;
use Illuminate\Database\Seeder;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Kategori::create(['nama' => 'Ziyadah']);
        // Kategori::create(['nama' => 'Murojaah']);

        $data = [
            "Syawwal",
            "Dzulqo'dah",
            "Dzulhijjah",
            "Muharram",
            "Shafar",
            "Rabiul Awwal",
            "Raibul Akhir",
            "Jumadil Awwal",
            "Jumadil Akhir",
            "Rajab",
            "Sya'ban",
            "Ramadhan",
            "Daftar Ulang",
        ];

        foreach ($data as $bulan) {
            KategoriPembayaran::create([
                'nama' => $bulan
            ]);
        }

        for ($i = 1; $i < 13; $i++) {
            WajibBayar::create([
                'kategori_pembayaran_id' => $i,
                'tahun' => '1444 / 1445',
                'jumlah' => 225000,
                'jenis_kelamin' => 'L'
            ]);

            WajibBayar::create([
                'kategori_pembayaran_id' => $i,
                'tahun' => '1444 / 1445',
                'jumlah' => 220000,
                'jenis_kelamin' => 'P'
            ]);
        }

        WajibBayar::create([
            'kategori_pembayaran_id' => 13,
            'tahun' => '1444 / 1445',
            'jumlah' => 325000,
            'jenis_kelamin' => 'L'
        ]);

        WajibBayar::create([
            'kategori_pembayaran_id' => 13,
            'tahun' => '1444 / 1445',
            'jumlah' => 395000,
            'jenis_kelamin' => 'P'
        ]);
    }
}
