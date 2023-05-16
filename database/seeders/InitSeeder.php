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
    }
}
