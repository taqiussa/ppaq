<?php

namespace App\Http\Controllers;

use App\Models\User;
use Spatie\Permission\Models\Role;

class TambahPenggunaController extends Controller
{
    public function index()
    {
        return inertia(
            'Admin/TambahPengguna',
            [
                'listRole' => Role::orderBy('name')->get()
            ]
        );
    }

    public function simpan()
    {
        $validated = request()->validate([
            'name' => 'required',
            'username' => 'required',
            'jenis_kelamin' => 'required',
            'password' => 'required|confirmed'
        ]);
        $validated['password'] = bcrypt(request('password'));

        $user = User::create($validated);

        $user->assignRole(request('role'));

        return to_route('tambah-pengguna');
    }
}
