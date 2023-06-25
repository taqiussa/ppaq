<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class PengasuhSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'name' => 'Pengasuh',
            'guard_name' => 'web'
        ]);

        $muhammad = User::create([
            'name' => 'Muhammad Ghozali',
            'username' => 'gusmad',
            'jenis_kelamin' => 'L',
            'password' => bcrypt('pengasuhppaq')
        ]);

        $muhammad->assignRole('Pengasuh');

        $qodir = User::create([
            'name' => 'Abdul Qodir',
            'username' => 'gusqodir',
            'jenis_kelamin' => 'L',
            'password' => bcrypt('pengasuhppaq')
        ]);

        $qodir->assignRole('Pengasuh');
    }
}
