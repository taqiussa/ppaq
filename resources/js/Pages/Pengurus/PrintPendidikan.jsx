import Bulan from '@/Components/Sia/Bulan'
import PrintLink from '@/Components/Sia/PrintLink'
import Tahun from '@/Components/Sia/Tahun'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const PrintPendidikan = ({ initTahun, initBulan }) => {

    const { data, setData } = useForm({
        tahun: initTahun,
        bulan: initBulan,
    })

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (
        <>
            <Head title='Print Pendidikan' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 text-lg text-center text-slate-600 font-bold uppercase mb-2">print pendidikan</div>
            <div className="py-2 font-bold text-slate-600 text-md">Semua Santri</div>
            <div className="lg:grid lg:grid-cols-5 lg:gap-2 lg:space-y-0 space-y-3 mb-3">
                <Tahun
                    name='tahun'
                    value={data.tahun}
                    handleChange={onHandleChange}
                />

                <Bulan
                    name='bulan'
                    value={data.bulan}
                    handleChange={onHandleChange}
                />

            </div>
            <PrintLink label='print semua' href={route('print-pendidikan.print-semua', { tahun: data.tahun, bulan: data.bulan })} />
        </>
    )
}

PrintPendidikan.layout = page => <AppLayout children={page} />
export default PrintPendidikan