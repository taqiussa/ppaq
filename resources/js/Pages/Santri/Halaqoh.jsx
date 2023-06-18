import { hariTanggal, kategoriHalaqoh, namaBulanHijriyah } from '@/Functions/functions'
import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Halaqoh = ({ listHalaqoh }) => {
    return (
        <>
            <Head title='Halaqoh' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 text-center text-lg text-slate-600 font-bold uppercase mb-2">rekapan halaqoh</div>
            <div className="overflow-x-auto pt-2">
                <table className="w-full text-sm text-slate-600">
                    <thead className="text-sm text-slate-600 bg-gray-50">
                        <tr>
                            <th scope='col' className="py-3 px-2">
                                No
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Juz
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Kategori
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Tanggal
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Bulan
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Tahun
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listHalaqoh && listHalaqoh.map((halaqoh, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {halaqoh.juz}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {kategoriHalaqoh(halaqoh.kategori_id)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {hariTanggal(halaqoh.tanggal)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {namaBulanHijriyah(halaqoh.bulan)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {halaqoh.tahun}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

Halaqoh.layout = page => <AppLayout children={page} />
export default Halaqoh