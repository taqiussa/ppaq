import Tahun from '@/Components/Sia/Tahun'
import { arrayBulan } from '@/Functions/functions'
import getKehadiran from '@/Functions/getKehadiran'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { trackPromise } from 'react-promise-tracker'

const Kehadiran = ({ initTahun }) => {

    const { data, setData } = useForm({
        tahun: initTahun,
        listAbsensi: [],
    })

    async function getDataAbsensi() {
        const response = await getKehadiran(data.tahun)
        setData({ ...data, listAbsensi: response.listAbsensi })
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    useEffect(() => {
        if (data.tahun)
            trackPromise(getDataAbsensi())
    }, [data.tahun])

    return (
        <>
            <Head title='Kehadiran' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">
                kehadiran
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
                                Bulan
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Hadir
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Izin
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Alpha
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayBulan() &&
                            arrayBulan().map((bulan, index) => (
                                <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                    <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="py-2 px-2 font-medium text-slate-600">
                                        {bulan.nama}
                                    </td>
                                    <td className="py-2 px-2 font-medium text-slate-600">
                                        {data.listAbsensi && data.listAbsensi.filter(absensi => absensi.bulan == bulan.id).map(absensi => absensi.hadir)}
                                    </td>
                                    <td className="py-2 px-2 font-medium text-slate-600">
                                        {data.listAbsensi && data.listAbsensi.filter(absensi => absensi.bulan == bulan.id).map(absensi => absensi.izin)}
                                    </td>
                                    <td className="py-2 px-2 font-medium text-slate-600">
                                        {data.listAbsensi && data.listAbsensi.filter(absensi => absensi.bulan == bulan.id).map(absensi => absensi.alpha)}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

Kehadiran.layout = page => <AppLayout children={page} />
export default Kehadiran