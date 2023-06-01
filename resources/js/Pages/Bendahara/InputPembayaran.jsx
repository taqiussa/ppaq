import PrimaryButton from '@/Components/PrimaryButton'
import Hapus from '@/Components/Sia/Hapus'
import InputText from '@/Components/Sia/InputText'
import Kategori from '@/Components/Sia/Kategori'
import SearchableSelect from '@/Components/Sia/SearchableSelect'
import Sweet from '@/Components/Sia/Sweet'
import Tahun from '@/Components/Sia/Tahun'
import { hariTanggal, maskRupiah, rupiah } from '@/Functions/functions'
import getPembayaran from '@/Functions/getPembayaran'
import getWajibBayar from '@/Functions/getWajibBayar'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { useEffect } from 'react'
import { trackPromise } from 'react-promise-tracker'
import { toast } from 'react-toastify'

const InputPembayaran = ({ initTahun, listSantri }) => {

    const { data, setData, post, errors, processing, delete: destroy } = useForm({
        tahun: initTahun,
        kategoriPembayaranId: '',
        nis: '',
        jumlah: 0,
        listPembayaran: [],
        listKategori: []
    })

    const options = listSantri.map((santri) => ({
        value: santri.nis,
        label: santri.name
    }))

    async function getDataPembayaran() {
        const response = await getPembayaran(data.tahun, data.nis)
        setData({ ...data, listPembayaran: response.listPembayaran ?? [] })
    }

    async function getDataWajiBayar() {
        const response = await getWajibBayar(data.tahun)
        setData({ ...data, listKategori: response.listWajibBayar })
    }

    const handleRupiah = (e) => {
        setData('jumlah', maskRupiah(e.target.value))
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('input-pembayaran.simpan'),
            {
                onSuccess: () => {
                    toast.success('Berhasil Simpan Pembayaran')
                    setData({ ...data })
                    trackPromise(getDataPembayaran())
                }
            })
    }

    const handleDelete = (id) => {
        Sweet
            .fire({
                title: 'Hapus',
                text: 'Anda Yakin Menghapus?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Ya, Hapus!',
                cancelButtonText: 'Batal'
            })
            .then((result) => {
                if (result.isConfirmed)
                    destroy(route('input-pembayaran.hapus', { id: id }),
                        {
                            onSuccess: () => {
                                toast.success('Berhasil Hapus Data Pembayaran')
                                setData({ ...data })
                                trackPromise(getDataPembayaran())
                            }
                        })
            })
    }

    useEffect(() => {
        if (data.tahun)
            trackPromise(getDataWajiBayar())
    }, [data.tahun])

    useEffect(() => {
        if (data.tahun && data.nis)
            trackPromise(getDataPembayaran())
    }, [data.tahun, data.nis])

    return (
        <>
            <Head title='Input Pembayaran' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">
                input pembayaran
            </div>
            <form onSubmit={submit}>
                <div className='lg:grid lg:grid-cols-4 lg:gap-2 lg:space-y-0 grid grid-cols-2 gap-2 pb-2'>

                    <SearchableSelect
                        id='nis'
                        name='nis'
                        label='Nama Santri'
                        value={data.nis}
                        message={errors.nis}
                        options={options}
                        onChange={(e) => setData({ ...data, nis: e ?? '' })}
                    />

                    <Tahun
                        id='tahun'
                        name='tahun'
                        value={data.tahun}
                        message={errors.tahun}
                        handleChange={onHandleChange}
                    />

                    <Kategori
                        id='kategoriPembayaranId'
                        name='kategoriPembayaranId'
                        value={data.kategoriPembayaranId}
                        message={errors.kategoriPembayaranId}
                        handleChange={onHandleChange}
                        listKategori={data.listKategori}
                    />

                    <InputText
                        id='jumlah'
                        name='jumlah'
                        label='Jumlah'
                        value={data.jumlah}
                        message={errors.jumlah}
                        handleChange={handleRupiah}
                    />

                </div>
                <PrimaryButton onClick={submit} children='simpan' disabled={processing} />
            </form>
            <div className="overflow-x-auto pt-2">
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
                                Tanggal Pembayaran
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
                        {data.listPembayaran && data.listPembayaran.map((pembayaran, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {pembayaran.kategori_pembayaran?.nama}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {hariTanggal(pembayaran.created_at)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {rupiah(pembayaran.jumlah)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    <Hapus onClick={() => handleDelete(pembayaran.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

InputPembayaran.layout = page => <AppLayout children={page} />
export default InputPembayaran