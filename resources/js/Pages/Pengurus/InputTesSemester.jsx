import PrimaryButton from '@/Components/PrimaryButton'
import Bulan from '@/Components/Sia/Bulan'
import Hapus from '@/Components/Sia/Hapus'
import JuzSemester from '@/Components/Sia/JuzSemester'
import SearchableSelect from '@/Components/Sia/SearchableSelect'
import Semester from '@/Components/Sia/Semester'
import Sweet from '@/Components/Sia/Sweet'
import Tahun from '@/Components/Sia/Tahun'
import Tanggal from '@/Components/Sia/Tanggal'
import { hariTanggal, namaBulanHijriyah } from '@/Functions/functions'
import getTesSemester from '@/Functions/getTesSemester'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import moment from 'moment/moment'
import React from 'react'
import { useEffect } from 'react'
import { trackPromise } from 'react-promise-tracker'
import { toast } from 'react-toastify'

const InputTesSemester = ({ initTahun, initBulan, listSantri }) => {

    const { data, setData, post, errors, processing, delete: destroy } = useForm({
        tanggal: moment(new Date()).format('YYYY-MM-DD'),
        tahun: initTahun,
        bulan: initBulan,
        nis: '',
        juz: '',
        semester: '',
        listTes: []
    })

    const options = listSantri.map((santri) => ({
        value: santri.nis,
        label: santri.name
    }))

    async function getData() {
        const response = await getTesSemester(data.nis)
        setData({ ...data, listTes: response.listTes })
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('input-tes-semester.simpan'),
            {
                onSuccess: () => {
                    toast.success('Berhasil Simpan Tes Semester')
                    setData({ ...data })
                    trackPromise(getData())
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
                    destroy(route('input-tes-semester.hapus', { id: id }),
                        {
                            onSuccess: () => {
                                toast.success('Berhasil Hapus Data Tes Semester')
                                setData({ ...data })
                                trackPromise(getData())
                            }
                        })
            })
    }


    useEffect(() => {
        if (data.tahun && data.nis)
            trackPromise(getData())
    }, [data.tahun, data.nis])

    return (
        <>
            <Head title='Input Binnadzor' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">input binnadzor</div>
            <form onSubmit={submit}>

                <div className='lg:grid lg:grid-cols-5 lg:gap-2 lg:space-y-0 space-y-3 pb-2'>

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

                    <div className="col-span-2">

                        <SearchableSelect
                            id='nis'
                            name='nis'
                            label='Nama Santri'
                            value={data.nis}
                            message={errors.nis}
                            options={options}
                            onChange={(e) => setData({ ...data, nis: e ?? '' })}
                        />
                    </div>

                    <Semester
                        name='semester'
                        value={data.semester}
                        message={errors.semester}
                        handleChange={onHandleChange}
                    />

                    <JuzSemester
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
                                Semester
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
                        {data.listTes && data.listTes.map((tes, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {tes.semester}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {tes.juz}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {hariTanggal(tes.tanggal)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {namaBulanHijriyah(tes.bulan)}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {tes.tahun}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {data.listTes &&
                                        <Hapus onClick={() => handleDelete(tes.id)} />
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

InputTesSemester.layout = page => <AppLayout children={page} />
export default InputTesSemester