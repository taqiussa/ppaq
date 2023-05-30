import PrimaryButton from '@/Components/PrimaryButton'
import Hapus from '@/Components/Sia/Hapus'
import InputText from '@/Components/Sia/InputText'
import Kategori from '@/Components/Sia/Kategori'
import Sweet from '@/Components/Sia/Sweet'
import Tahun from '@/Components/Sia/Tahun'
import { maskRupiah, rupiah } from '@/Functions/functions'
import getWajibBayar from '@/Functions/getWajibBayar'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { useEffect } from 'react'
import { trackPromise } from 'react-promise-tracker'
import { toast } from 'react-toastify'

const AturWajibBayar = ({ initTahun, listKategori }) => {

    const { data, setData, post, errors, processing, delete: destroy } = useForm({
        tahun: initTahun,
        kategoriPembayaranId: '',
        keterangan: '',
        jumlah: 0,
        listWajibBayar: []
    })

    async function getData() {
        const response = await getWajibBayar(data.tahun)
        setData({ ...data, listWajibBayar: response.listWajibBayar })
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const handleRupiah = (e) => {
        const value = e.target.value
        setData('jumlah', maskRupiah(value))
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('atur-wajib-bayar.simpan'), {
            onSuccess: (e) => {
                toast.success('Berhasil Simpan Wajib Bayar')
                setData({ ...data })
                trackPromise(getData())
            }
        })
    }

    const handleDelete = (id) => {

        Sweet.fire({
            title: 'Hapus',
            text: 'Anda Yakin Menghapus ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal'
        })
            .then((result) => {
                if (result.isConfirmed)
                    destroy(route('atur-wajib-bayar.hapus', { id: id }),
                        {
                            onSuccess: () => {
                                toast.success('Berhasil Hapus Wajib Bayar')
                                setData({ ...data })
                                trackPromise(getData())
                            }
                        })
            })
    }

    useEffect(() => {
        if (data.tahun)
            trackPromise(getData())
    }, [data.tahun])

    return (
        <>
            <Head title='Atur Wajib Bayar' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">
                atur wajib bayar
            </div>
            <form onSubmit={submit}>

                <div className='lg:grid lg:grid-cols-4 lg:gap-2 lg:space-y-0 grid grid-cols-2 gap-2 pb-2'>
                    <Tahun
                        id='tahun'
                        name='tahun'
                        value={data.tahun}
                        handleChange={onHandleChange}
                    />

                    <Kategori
                        id='kategoriPembayaranId'
                        name='kategoriPembayaranId'
                        value={data.kategoriPembayaranId}
                        listKategori={listKategori}
                        handleChange={onHandleChange}
                    />

                    <InputText
                        id='keterangan'
                        name='keterangan'
                        value={data.keterangan}
                        label='Keterangan'
                        handleChange={onHandleChange}
                    />

                    <InputText
                        id='jumlah'
                        name='jumlah'
                        value={data.jumlah}
                        label='Jumlah'
                        handleChange={handleRupiah}
                    />

                </div>
                <PrimaryButton onClick={submit} disabled={processing} children='simpan' />
            </form>
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
                                Keterangan
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Jumlah
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.listWajibBayar && data.listWajibBayar.map((wajib, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {wajib.kategori_pembayaran.nama}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {wajib.keterangan}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {rupiah(wajib.jumlah)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    <Hapus onClick={() => handleDelete(wajib.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

AturWajibBayar.layout = page => <AppLayout children={page} />
export default AturWajibBayar