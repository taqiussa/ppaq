@extends('print', ['title' => 'Print Pelanggaran'])
@section('content')
    <div class="px-7 py-7 font-bold text-lg capitalize ">
        rekap pelanggaran bulan {{ namaBulanHijriyah($bulan) }} tahun {{ $tahun }}
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
                        L/P
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Tanggal
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Pelanggaran
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Skor
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($listPelanggaran as $santri)
                    <tr class="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                        <td class="py-2 px-2 font-medium  text-center">
                            {{ $loop->iteration }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $santri->user?->name }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $santri->user?->jenis_kelamin }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ hariTanggal($santri->tanggal) }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $santri->skors->keterangan }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $santri->skors->skor }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
