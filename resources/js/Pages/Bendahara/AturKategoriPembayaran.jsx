import PrimaryButton from '@/Components/PrimaryButton'
import InputText from '@/Components/Sia/InputText'
import Sweet from '@/Components/Sia/Sweet'
import Tahun from '@/Components/Sia/Tahun'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-toastify'

const AturKategoriPembayaran = () => {

    const { data, setData, post, errors, processing, delete: destroy } = useForm({
        nama: ''
    })

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('atur-kategori-pembayaran.simpan'),
            {
                onSuccess: () => {
                    toast.success('Berhasil Simpan Kategori Pembayaran')
                    setData({ ...data })
                }
            })

    }

    const handleDelete = (id) => {

        Sweet.fire({
            title: 'Hapus',
            text: 'Anda Yakin Menghapus ? ',
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'Batal',
            confirmButtonText: 'Ya, Hapus!'
        })
            .then((result) => {
                if (result.isConfirmed)
                    destroy(route('atur-kategori-pembayaran.hapus', { id: id }), {
                        onSuccess: () => {
                            toast.success('Berhasil Hapus Kategori')
                        }
                    })
            })
    }

    return (
        <>
            <Head title='Data Induk Santri' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">
                atur kategori pembayaran
            </div>
            <form action="">
                <div className='lg:grid lg:grid-cols-3 lg:gap-2 lg:space-y-0 grid grid-cols-2 gap-2 pb-2'>
                    <InputText
                        id='nama'
                        name='nama'
                        label='kategori pembayaran'
                        value={data.nama}
                        handleChange={onHandleChange}
                    />
                </div>
                <PrimaryButton children='simpan' />
            </form>
        </>
    )
}

AturKategoriPembayaran.layout = page => <AppLayout children={page} />
export default AturKategoriPembayaran