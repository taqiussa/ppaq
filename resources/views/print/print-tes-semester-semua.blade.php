@extends('print', ['title' => 'Print Tes Semester'])
@section('content')
    <div class="px-7 py-7 font-bold text-lg capitalize ">
        rekap tes semester semua santri aktif per tanggal {{ hariTanggal(date('Y-m-d')) }}
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
                        Semester 1
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Semester 2
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Semester 3
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Semester 4
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Semester 5
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Semester 6
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
                            {{ $user->tesSemester->where('semester', 1)->first()?->juz }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $user->tesSemester->where('semester', 2)->first()?->juz }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $user->tesSemester->where('semester', 3)->first()?->juz }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $user->tesSemester->where('semester', 4)->first()?->juz }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $user->tesSemester->where('semester', 5)->first()?->juz }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $user->tesSemester->where('semester', 6)->first()?->juz }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
