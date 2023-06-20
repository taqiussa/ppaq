@extends('print')
@section('content')
    <div class="overflow-x-auto pt-2">
        <table class="w-full text-sm text-slate-600">
            <thead class="text-sm text-slate-600 bg-gray-50">
                <tr>
                    <th scope='col' class="py-3 px-2">
                        No
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Nama
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Wajib Bayar
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Jumlah Bayar
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Kurang Bayar
                    </th>
                    <th scope='col' class="py-3 px-2 text-left">
                        Keterangan
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($listSantri as $santri)
                    <tr class="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                        <td class="py-2 px-2 font-medium text-slate-600 text-center">
                            {{ $loop->iteration }}
                        </td>
                        <td class="py-2 px-2 font-medium text-slate-600">
                            {{ $santri->name }}
                        </td>
                        <td class="py-2 px-2 font-medium text-slate-600">
                            {{ rupiah($wajibBayar) }}
                        </td>
                        <td class="py-2 px-2 font-medium text-slate-600">
                            {{ rupiah($santri->pembayarans->sum('jumlah')) }}
                        </td>
                        <td class="py-2 px-2 font-medium text-slate-600">
                            {{ rupiah($wajibBayar - $santri->pembayarans->sum('jumlah')) }}
                        </td>
                        <td class="py-2 px-2 font-medium text-slate-600">

                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
