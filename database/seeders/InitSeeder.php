<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class InitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            'Admin',
            'Ketua',
            'Bendahara',
            'Pengurus',
            'Keamanan',
            'Pendidikan',
            'Santri'
        ];

        foreach ($data as $name) {
            Role::create([
                'name' => $name,
                'guard_name' => 'web'
            ]);
        }

        $user = User::create([
            'name' => 'Administrator',
            'username' => 'admin',
            'password' => bcrypt('asdfasdf'),
            'jenis_kelamin' => 'L',
        ]);

        $user->assignRole('Admin');
        
        $ketua = User::create([
            'name' => 'Ketua Pengurus Putra',
            'username' => 'ketuaputra',
            'password' => bcrypt('ketuappaq'),
            'jenis_kelamin' => 'L',
        ]);

        $ketua->assignRole('Ketua');

        $ketuaPutri = User::create([
            'name' => 'Ketua Pengurus Putri',
            'username' => 'ketuaputri',
            'password' => bcrypt('ketuappaq'),
            'jenis_kelamin' => 'P',
        ]);

        $ketuaPutri->assignRole('Ketua');

        $bendahara = User::create([
            'name' => 'Bendahara',
            'username' => 'bendahara',
            'password' => bcrypt('bendaharappaq'),
            'jenis_kelamin' => 'P',
        ]);

        $bendahara->assignRole('Bendahara');

        $pengurus = User::create([
            'name' => 'Anggota Pengurus Putra',
            'username' => 'pengurusputra',
            'password' => bcrypt('pengurusppaq'),
            'jenis_kelamin' => '',
        ]);

        $pengurus->assignRole('Pengurus');

        $pengurusPutri = User::create([
            'name' => 'Anggota Pengurus Putri',
            'username' => 'pengurusputri',
            'password' => bcrypt('pengurusppaq'),
            'jenis_kelamin' => '',
        ]);

        $pengurusPutri->assignRole('Pengurus');

        $keamanan = User::create([
            'name' => 'Keamanan Putra',
            'username' => 'keamananputra',
            'password' => bcrypt('keamananppaq'),
            'jenis_kelamin' => '',
        ]);

        $keamanan->assignRole('Keamanan');

        $keamananputri = User::create([
            'name' => 'Keamanan Putri',
            'username' => 'keamananputri',
            'password' => bcrypt('keamananppaq'),
            'jenis_kelamin' => '',
        ]);

        $keamananputri->assignRole('Keamanan');

        $pendidikan = User::create([
            'name' => 'Pendidikan Putra',
            'username' => 'pendidikanputra',
            'password' => bcrypt('pendidikanppaq'),
            'jenis_kelamin' => '',
        ]);

        $pendidikan->assignRole('Pendidikan');

        $pendidikanputri = User::create([
            'name' => 'Pendidikan Putri',
            'username' => 'pendidikanputri',
            'password' => bcrypt('pendidikanppaq'),
            'jenis_kelamin' => '',
        ]);

        $pendidikanputri->assignRole('Pendidikan');
    }
}
