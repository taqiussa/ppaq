import Bulan from '@/Components/Sia/Bulan'
import DownloadLink from '@/Components/Sia/DownloadLink'
import Tahun from '@/Components/Sia/Tahun'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const PrintPembayaran = ({ initTahun, initBulan }) => {

    const { data, setData } = useForm({
        tahun: initTahun,
        bulan: initBulan,
        tahunSantri: initTahun,
        nis: ''
    })

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (
        <>
            <Head title='Print Pembayaran' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 text-lg text-center text-slate-600 font-bold uppercase mb-2">print pembayaran</div>
            <div className="py-2 font-bold text-slate-600 text-md">Semua Santri</div>
            <div className="lg:grid lg:grid-cols-5 lg:gap-2 lg:space-y-0 space-y-3">
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
            <DownloadLink href={route('print-pembayaran.print', { tahun: data.tahun, bulan: data.bulan })} />
        </>
    )
}

PrintPembayaran.layout = page => <AppLayout children={page} />
export default PrintPembayaran