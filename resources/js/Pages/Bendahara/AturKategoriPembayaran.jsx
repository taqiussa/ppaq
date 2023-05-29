import PrimaryButton from '@/Components/PrimaryButton'
import Hapus from '@/Components/Sia/Hapus'
import InputText from '@/Components/Sia/InputText'
import Sweet from '@/Components/Sia/Sweet'
import Tahun from '@/Components/Sia/Tahun'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-toastify'

const AturKategoriPembayaran = ({ listKategori }) => {

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
            <form onSubmit={submit}>
                <div className='lg:grid lg:grid-cols-3 lg:gap-2 lg:space-y-0 grid grid-cols-2 gap-2 pb-2'>
                    <InputText
                        id='nama'
                        name='nama'
                        label='kategori pembayaran'
                        value={data.nama}
                        message={errors.nama}
                        handleChange={onHandleChange}
                    />
                </div>
                <PrimaryButton children='simpan' onClick={submit} />
            </form>
            <div className="overflow-x-auto pt-2">
                <table className="w-full text-sm text-slate-600">
                    <thead className="text-sm text-slate-600 bg-gray-50">
                        <tr>
                            <th scope='col' className="py-3 px-2">
                                No
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Nama
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listKategori && listKategori.map((kategori, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {kategori.nama}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    <Hapus onClick={() => handleDelete(kategori.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

AturKategoriPembayaran.layout = page => <AppLayout children={page} />
export default AturKategoriPembayaran