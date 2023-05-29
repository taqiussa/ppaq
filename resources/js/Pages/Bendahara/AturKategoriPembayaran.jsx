import InputText from '@/Components/Sia/InputText'
import Tahun from '@/Components/Sia/Tahun'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const AturKategoriPembayaran = () => {

    const { data, setData } = useForm({
        nama: ''
    })

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (
        <>
            <Head title='Data Induk Santri' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">
                atur kategori pembayaran
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:gap-2 lg:space-y-0 grid grid-cols-2 gap-2 pb-2'>
                <InputText
                    id='nama'
                    name='nama'
                    label='kategori pembayaran'
                    value={data.nama}
                    handleChange={onHandleChange}
                />
            </div>
        </>
    )
}

AturKategoriPembayaran.layout = page => <AppLayout children={page} />
export default AturKategoriPembayaran