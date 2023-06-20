<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name' => 'demo',
            'username' => 'demo',
            'password' => bcrypt('12345678'),
            'jenis_kelamin' => 'L',
        ]);

        $user->assignRole('Ketua');
    }
}
