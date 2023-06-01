import PrimaryButton from '@/Components/PrimaryButton'
import Bulan from '@/Components/Sia/Bulan'
import Hapus from '@/Components/Sia/Hapus'
import InputText from '@/Components/Sia/InputText'
import SearchableSelect from '@/Components/Sia/SearchableSelect'
import Sweet from '@/Components/Sia/Sweet'
import Tahun from '@/Components/Sia/Tahun'
import getAbsensi from '@/Functions/getAbsensi'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { useEffect } from 'react'
import { trackPromise } from 'react-promise-tracker'
import { toast } from 'react-toastify'

const InputAbsensi = ({ initTahun, initBulan, listSantri }) => {

    const { data, setData, post, errors, processing, delete: destroy } = useForm({
        tahun: initTahun,
        bulan: initBulan,
        nis: '',
        hadir: 0,
        sakit: 0,
        izin: 0,
        pulang: 0,
        listAbsensi: []
    })

    const options = listSantri.map((santri) => ({
        value: santri.nis,
        label: santri.name
    }))

    async function getDataAbsensi() {
        const response = await getAbsensi(data.tahun, data.bulan)
        setData({ ...data, listAbsensi: response.listAbsensi })
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('input-absensi.simpan'),
            {
                onSuccess: () => {
                    toast.success('Berhasil Simpan Absensi')
                    setData({ ...data })
                    trackPromise(getDataAbsensi())
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
                    destroy(route('input-absensi.hapus', { id: id }),
                        {
                            onSuccess: () => {
                                toast.success('Berhasil Hapus Data Absensi')
                                setData({ ...data })
                                trackPromise(getDataAbsensi())
                            }
                        })
            })
    }


    useEffect(() => {
        if (data.tahun && data.bulan)
            trackPromise(getDataAbsensi())
    }, [data.tahun, data.bulan])

    return (
        <>
            <Head title='Input Absensi' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">input absensi</div>
            <form onSubmit={submit}>

                <div className='lg:grid lg:grid-cols-4 lg:gap-2 lg:space-y-0 space-y-3 pb-2'>

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

                    <InputText
                        id='hadir'
                        name='hadir'
                        label='hadir'
                        value={data.hadir}
                        message={errors.hadir}
                        handleChange={onHandleChange}
                    />
                    <InputText
                        id='sakit'
                        name='sakit'
                        label='sakit'
                        value={data.sakit}
                        message={errors.sakit}
                        handleChange={onHandleChange}
                    />
                    <InputText
                        id='izin'
                        name='izin'
                        label='izin'
                        value={data.izin}
                        message={errors.izin}
                        handleChange={onHandleChange}
                    />
                    <InputText
                        id='pulang'
                        name='pulang'
                        label='pulang'
                        value={data.pulang}
                        message={errors.pulang}
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
                                Nama
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Hadir
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Sakit
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Izin
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Pulang
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listSantri && listSantri.map((santri, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {santri.name}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {data.listAbsensi && data.listAbsensi.filter(absensi => absensi.nis == santri.nis).map(absensi => absensi.hadir)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {data.listAbsensi && data.listAbsensi.filter(absensi => absensi.nis == santri.nis).map(absensi => absensi.sakit)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {data.listAbsensi && data.listAbsensi.filter(absensi => absensi.nis == santri.nis).map(absensi => absensi.izin)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {data.listAbsensi && data.listAbsensi.filter(absensi => absensi.nis == santri.nis).map(absensi => absensi.pulang)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {data.listAbsensi && data.listAbsensi.filter(absensi => absensi.nis == santri.nis).map(absensi =>
                                        <Hapus onClick={() => handleDelete(absensi.id)} />
                                    )}

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

InputAbsensi.layout = page => <AppLayout children={page} />
export default InputAbsensi