import PrimaryButton from '@/Components/PrimaryButton'
import Bulan from '@/Components/Sia/Bulan'
import Hapus from '@/Components/Sia/Hapus'
import Juz from '@/Components/Sia/Juz'
import KategoriHalaqoh from '@/Components/Sia/KategoriHalaqoh'
import SearchableSelect from '@/Components/Sia/SearchableSelect'
import Sweet from '@/Components/Sia/Sweet'
import Tahun from '@/Components/Sia/Tahun'
import Tanggal from '@/Components/Sia/Tanggal'
import { hariTanggal, namaBulanHijriyah } from '@/Functions/functions'
import getHalaqoh from '@/Functions/getHalaqoh'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import moment from 'moment/moment'
import React from 'react'
import { useEffect } from 'react'
import { trackPromise } from 'react-promise-tracker'
import { toast } from 'react-toastify'

const InputHalaqoh = ({ initTahun, initBulan, listSantri }) => {

    const { data, setData, post, errors, processing, delete: destroy } = useForm({
        tanggal: moment(new Date()).format('YYYY-MM-DD'),
        tahun: initTahun,
        bulan: initBulan,
        kategoriId: '',
        nis: '',
        juz: '',
        listHalaqoh: []
    })

    const options = listSantri.map((santri) => ({
        value: santri.nis,
        label: santri.name
    }))

    async function getDataHalaqoh() {
        const response = await getHalaqoh(data.nis, data.kategoriId)
        setData({ ...data, listHalaqoh: response.listHalaqoh })
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('input-halaqoh.simpan'),
            {
                onSuccess: () => {
                    toast.success('Berhasil Simpan Halaqoh')
                    setData({ ...data })
                    trackPromise(getDataHalaqoh())
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
                    destroy(route('input-halaqoh.hapus', { id: id }),
                        {
                            onSuccess: () => {
                                toast.success('Berhasil Hapus Data Halaqoh')
                                setData({ ...data })
                                trackPromise(getDataHalaqoh())
                            }
                        })
            })
    }

    useEffect(() => {
        if (data.tahun && data.nis && data.kategoriId)
            trackPromise(getDataHalaqoh())
    }, [data.tahun, data.nis, data.kategoriId])

    return (
        <>
            <Head title='Input Halaqoh' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">input halaqoh</div>
            <form onSubmit={submit}>

                <div className='lg:grid lg:grid-cols-4 lg:gap-2 lg:space-y-0 space-y-3 pb-2'>

                    <Tanggal
                        id='tanggal'
                        name='tanggal'
                        label='tanggal'
                        value={data.tanggal}
                        message={errors.tanggal}
                        handleChange={onHandleChange}
                    />

                    <Tahun
                        id='tahun'
                        name='tahun'
                        label='tahun'
                        value={data.tahun}
                        message={errors.tahun}
                        handleChange={onHandleChange}
                    />

                    <Bulan
                        id='bulan'
                        name='bulan'
                        label='bulan'
                        value={data.bulan}
                        message={errors.bulan}
                        handleChange={onHandleChange}
                    />

                    <SearchableSelect
                        id='nis'
                        name='nis'
                        label='Nama Santri'
                        value={data.nis}
                        message={errors.nis}
                        options={options}
                        onChange={(e) => setData({ ...data, nis: e ?? '' })}
                    />

                    <KategoriHalaqoh
                        id='kategoriId'
                        name='kategoriId'
                        value={data.kategoriId}
                        message={errors.kategoriId}
                        handleChange={onHandleChange}
                    />

                    <Juz
                        id='juz'
                        name='juz'
                        value={data.juz}
                        message={errors.juz}
                        handleChange={onHandleChange}
                    />

                </div>
                <PrimaryButton onClick={submit} disabled={processing} children='simpan' />
            </form>
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
                                Tanggal
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Bulan
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Tahun
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.listHalaqoh && data.listHalaqoh.map((bilhifzhi, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {bilhifzhi.juz}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {hariTanggal(bilhifzhi.tanggal)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {namaBulanHijriyah(bilhifzhi.bulan)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {bilhifzhi.tahun}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {data.listHalaqoh &&
                                        <Hapus onClick={() => handleDelete(bilhifzhi.id)} />
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

InputHalaqoh.layout = page => <AppLayout children={page} />
export default InputHalaqoh