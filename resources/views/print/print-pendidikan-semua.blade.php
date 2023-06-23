@extends('print')
@section('content')
    <div class="px-7 py-7 font-bold text-lg capitalize ">
        rekap pendidikan bulan {{ $bulan }} tahun {{ $tahun }}
    </div>
    <div class="overflow-x-auto pt-2 px-7">
        <table class="w-full text-sm ">
            <thead class="text-sm  bg-gray-50">
                <tr>
                    <th scope='col' class="py-3 px-2">
                        No
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Nama
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Bilhifzhi Ziyadah
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Bilhifzhi Murojaan
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Binnadzor
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Halaqoh Tashih MTQ
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Halaqoh Kelas MTQ
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($listSantri as $santri)
                    <tr class="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                        <td class="py-2 px-2 font-medium  text-center">
                            {{ $loop->iteration }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $santri->name }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{-- {{ $santri->bil->juz }} --}}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{-- {{ $santri->absensi->izin }} --}}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{-- {{ $santri->absensi->alpha }} --}}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{-- {{ $santri->absensi->hadir + $santri->absensi->izin + $santri->absensi->alpha }} --}}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{-- {{ $santri->absensi->hadir + $santri->absensi->izin + $santri->absensi->alpha }} --}}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
