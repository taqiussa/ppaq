@extends('print', ['title' => 'Print Pembayaran'])
@section('content')
<div class="px-7 py-7 font-bold text-lg capitalize ">
    rekap pembayaran  {{ $kategori }} tahun {{ $tahun }}
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
                        <td class="py-2 px-2 font-medium  text-center">
                            {{ $loop->iteration }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ $santri->name }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ rupiah($wajibBayar) }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ rupiah($santri->pembayarans->sum('jumlah')) }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            {{ rupiah($wajibBayar - $santri->pembayarans->sum('jumlah')) }}
                        </td>
                        <td class="py-2 px-2 font-medium ">
                            @if ($wajibBayar - $santri->pembayarans->sum('jumlah') <= 0)
                                Lunas
                            @else
                                Belum Lunas
                            @endif
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
