import Tahun from '@/Components/Sia/Tahun'
import { penjumlahan, rupiah } from '@/Functions/functions'
import getAdministrasi from '@/Functions/getAdministrasi'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { trackPromise } from 'react-promise-tracker'

const Administrasi = ({ initTahun }) => {

    const { data, setData } = useForm({
        tahun: initTahun,
        listPembayaran: [],
        listWajibBayar: []
    })

    async function getData() {
        const response = await getAdministrasi(data.tahun)
        setData({
            ...data,
            listPembayaran: response.listPembayaran,
            listWajibBayar: response.listWajibBayar
        })
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    useEffect(() => {
        if (data.tahun)
            trackPromise(getData())
    }, [data.tahun])

    return (
        <>
            <Head title='Administrasi' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">
                administrasi
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:gap-2 lg:space-y-0 grid grid-cols-2 gap-2 pb-2'>
                <Tahun
                    id='tahun'
                    name='tahun'
                    value={data.tahun}
                    handleChange={onHandleChange}
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-600">
                    <thead className="text-sm text-slate-600 bg-gray-50">
                        <tr>
                            <th scope='col' className="py-3 px-2">
                                No
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Kategori Pembayaran
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Wajib Bayar
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Jumlah Pembayaran
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Belum Dibayar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.listWajibBayar &&
                            data.listWajibBayar.map((wajib, index) => (
                                <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                    <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="py-2 px-2 font-medium text-slate-600">
                                        {wajib.kategori_pembayaran?.nama}
                                    </td>
                                    <td className="py-2 px-2 font-medium text-slate-600">
                                        {rupiah(wajib.jumlah)}
                                    </td>
                                    <td className="py-2 px-2 font-medium text-slate-600">
                                        {data.listPembayaran && rupiah(penjumlahan(data.listPembayaran.filter(bayar => bayar.kategori_pembayaran_id == wajib.kategori_pembayaran_id), 'jumlah'))
                                        }
                                    </td>
                                    <td className="py-2 px-2 font-medium text-slate-600">
                                        {rupiah(wajib.jumlah - penjumlahan(data.listPembayaran.filter(bayar => bayar.kategori_pembayaran_id == wajib.kategori_pembayaran_id), 'jumlah'))
                                        }
                                    </td>
                                </tr>
                            ))}
                        <tr className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                            <td colSpan={4} className="py-2 px-2 font-bold text-slate-600">
                                Total Wajib Bayar
                            </td>
                            <td colSpan={1} className="py-2 px-2 font-bold text-slate-600">
                                {rupiah(penjumlahan(data.listWajibBayar, 'jumlah'))}
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                            <td colSpan={4} className="py-2 px-2 font-bold text-slate-600">
                                Total Pembayaran
                            </td>
                            <td colSpan={1} className="py-2 px-2 font-bold text-slate-600">
                                {rupiah(penjumlahan(data.listPembayaran, 'jumlah'))}
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                            <td colSpan={4} className="py-2 px-2 font-bold text-slate-600">
                                Belum Dibayar
                            </td>
                            <td colSpan={1} className="py-2 px-2 font-bold text-slate-600">
                                {rupiah(penjumlahan(data.listWajibBayar, 'jumlah') - penjumlahan(data.listPembayaran, 'jumlah'))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

Administrasi.layout = page => <AppLayout children={page} />
export default Administrasi