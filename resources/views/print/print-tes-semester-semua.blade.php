@extends('print', ['title' => 'Print Tes Semester'])
@section('content')
    <div class="px-7 py-7 font-bold text-lg capitalize ">
        rekap tes semester semua santri aktif
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
                        Bilhifzhi
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Binnadzor
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Halaqoh
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Tashih Pengasuh
                    </th>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($listSantri as $user)
                    <tr class="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                        <td class="py-2 px-2 font-medium  text-center">
                            {{ $loop->iteration }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $user->name }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            Ziyadah :
                            @foreach ($user->bilhifzhi->where('kategori_id', 1) as $item)
                                {{ $item->juz }},
                            @endforeach
                            <br>
                            Muroja'ah :
                            @foreach ($user->bilhifzhi->where('kategori_id', 2) as $item)
                                {{ $item->juz }},
                            @endforeach
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            @foreach ($user->binnadzor as $item)
                                {{ $item->juz }},
                            @endforeach
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            Kelas MTQ :
                            @foreach ($user->halaqoh->where('kategori_id', 1) as $item)
                                {{ $item->juz }},
                            @endforeach
                            <br>
                            Tashih MTQ :
                            @foreach ($user->halaqoh->where('kategori_id', 2) as $item)
                                {{ $item->juz }},
                            @endforeach
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            @foreach ($user->tashih as $item)
                                {{ $item->juz }},
                            @endforeach
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
