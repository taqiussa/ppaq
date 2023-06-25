import PrimaryButton from '@/Components/PrimaryButton'
import Bulan from '@/Components/Sia/Bulan'
import SearchableSelect from '@/Components/Sia/SearchableSelect'
import Tahun from '@/Components/Sia/Tahun'
import Tanggal from '@/Components/Sia/Tanggal'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import moment from 'moment'
import React from 'react'
import { toast } from 'react-toastify'

const InputPelanggaran = ({ initTahun, initBulan, listSantri, listPeraturan }) => {

    const { data, setData, post, errors, processing, delete: destroy } = useForm({
        tahun: initTahun,
        bulan: initBulan,
        tanggal: moment(new Date()).format('YYYY-MM-DD'),
        nis: '',
        skorId: '',
    })

    const options = listSantri.map((santri) => ({
        value: santri.nis,
        label: santri.name
    }))

    const optionPeraturan = listPeraturan.map((aturan) => ({
        value: aturan.id,
        label: `(${aturan.skor}) ${aturan.keterangan}`
    }))

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('input-pelanggaran.simpan'),
            {
                onSuccess: () => {
                    toast.success('Berhasil Simpan Pelanggaran')
                    setData({ ...data })
                }
            })
    }

    return (
        <>
            <Head title='Input Pelanggaran' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">
                input pelanggaran
            </div>
            <form onSubmit={submit}>
                <div className='lg:grid lg:grid-cols-5 lg:gap-2 lg:space-y-0 grid grid-cols-2 gap-2 pb-2'>

                    <Tahun
                        id='tahun'
                        name='tahun'
                        value={data.tahun}
                        message={errors.tahun}
                        handleChange={onHandleChange}
                    />

                    <Bulan
                        name='bulan'
                        value={data.bulan}
                        message={errors.bulan}
                        handleChange={onHandleChange}
                    />

                    <Tanggal
                        name='tanggal'
                        label='tanggal'
                        value={data.tanggal}
                        message={errors.tanggal}
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

                    <div className="col-span-5">
                        <SearchableSelect
                            id='skorId'
                            name='skorId'
                            label='Pilih Pelanggaran'
                            value={data.skorId}
                            message={errors.skorId}
                            options={optionPeraturan}
                            onChange={(e) => setData({ ...data, skorId: e ?? '' })}
                        />
                    </div>

                </div>
                <PrimaryButton onClick={submit} children='simpan' disabled={processing} />
            </form>
            {/* <div className="overflow-x-auto pt-2">
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
            </div> */}
        </>
    )
}

InputPelanggaran.layout = page => <AppLayout children={page} />
export default InputPelanggaran