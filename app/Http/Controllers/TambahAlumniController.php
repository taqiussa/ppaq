<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Alamat;
use App\Models\Alumni;
use App\Models\Biodata;
use Illuminate\Support\Facades\Storage;

class TambahAlumniController extends Controller
{
    public function index()
    {
        return inertia('Pengurus/TambahAlumni');
    }

    public function simpan()
    {
        request()->validate([
            'nama' => 'required',
            'nis' => 'required|unique:users,nis',
            'tempatLahir' => 'required',
            'tanggalLahir' => 'required',
            'tanggal' => 'required',
            'tahun' => 'required',
            'bulan' => 'required',
        ]);

        try {

            $imageName = null;

            if (request()->hasFile('foto')) {
                $image = request()->file('foto');
                $imageName = request('nis') . '.' . $image->getClientOriginalExtension();
                $image->move(storage_path('app/public/foto'), $imageName);
            }

            User::create([
                'name' => request('nama'),
                'username' => null,
                'nis' => request('nis'),
                'password' => bcrypt('12345678'),
                'jenis_kelamin' => auth()->user()->jenis_kelamin,
                'foto' => $imageName ?? null,
                'aktif' => 0
            ]);

            Alumni::create([
                'nis' => request('nis'),
                'tanggal' => request('tanggal'),
                'bulan' => request('bulan'),
                'tahun' => request('tahun'),
            ]);

            Alamat::create([
                'nis' => request('nis'),
                'alamat' => request('alamatLengkap'),
                'rt' => request('rt'),
                'rw' => request('rw'),
                'desa' => request('desa'),
                'kecamatan' => request('kecamatan'),
                'kabupaten' => request('kabupaten'),
                'provinsi' => request('provinsi'),
            ]);

            Biodata::create([
                'nis' => request('nis'),
                'nisn' => request('nisn'),
                'nik' => request('nik'),
                'tempat_lahir' => request('tempatLahir'),
                'tanggal_lahir' => request('tanggalLahir'),
                'no_kk' => request('noKk'),
                'nama_ayah' => request('namaAyah'),
                'nik_ayah' => request('nikAyah'),
                'nama_ibu' => request('namaIbu'),
                'nik_ibu' => request('nikIbu'),
                'nama_wali' => request('namaWali'),
                'nik_wali' => request('nikWali'),
            ]);

            return to_route('tambah-alumni');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit()
    {
        return inertia('Pengurus/EditAlumni', [
            'santri' => User::whereNis(request('nis'))
                ->with([
                    'alamat',
                    'biodata'
                ])
                ->first()
        ]);
    }

    public function update()
    {
        request()->validate([
            'nama' => 'required',
            'nis' => 'required',
            'tempatLahir' => 'required',
            'tanggalLahir' => 'required'
        ]);

        try {

            $imageName = null;

            if (request()->hasFile('foto')) {
                $image = request()->file('foto');
                $imageName = request('nis') . '.' . $image->getClientOriginalExtension();
                $image->move(storage_path('app/public/foto'), $imageName);
            }

            $user = User::whereNis(request('nis'))->first();

            $imageName ?
                Storage::delete('public/foto/' . $user->foto)
                :
                null;

            User::updateOrCreate([
                'nis' => request('nis'),
            ], [
                'name' => request('nama'),
                'username' => null,
                'password' => bcrypt('12345678'),
                'jenis_kelamin' => auth()->user()->jenis_kelamin,
                'foto' => $imageName ? $imageName : $user->foto,
                'aktif' => 0
            ]);

            Alamat::updateOrCreate([
                'nis' => request('nis'),
            ], [
                'alamat' => request('alamatLengkap'),
                'rt' => request('rt'),
                'rw' => request('rw'),
                'desa' => request('desa'),
                'kecamatan' => request('kecamatan'),
                'kabupaten' => request('kabupaten'),
                'provinsi' => request('provinsi'),
            ]);

            Biodata::updateOrCreate([
                'nis' => request('nis'),
            ], [
                'nisn' => request('nisn'),
                'nik' => request('nik'),
                'tempat_lahir' => request('tempatLahir'),
                'tanggal_lahir' => request('tanggalLahir'),
                'no_kk' => request('noKk'),
                'nama_ayah' => request('namaAyah'),
                'nik_ayah' => request('nikAyah'),
                'nama_ibu' => request('namaIbu'),
                'nik_ibu' => request('nikIbu'),
                'nama_wali' => request('namaWali'),
                'nik_wali' => request('nikWali'),
            ]);

            return to_route('data-induk-alumni');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
