import PrimaryButton from '@/Components/PrimaryButton'
import Hapus from '@/Components/Sia/Hapus'
import InputArea from '@/Components/Sia/InputArea'
import InputText from '@/Components/Sia/InputText'
import Sweet from '@/Components/Sia/Sweet'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-toastify'

const InputDataSkor = ({ listDataSkor }) => {

    const { data, setData, post, errors, processing, delete: destroy } = useForm({
        keterangan: '',
        skor: ''
    })

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('input-data-skor'), {
            onSuccess: () => {
                toast.success('Berhasil Simpan Data Skor')
                setData({ ...data })
            }
        })
    }

    const handleDelete = (id) => {

        Sweet
            .fire(
                {
                    title: 'Menghapus Data',
                    text: 'Yakin Menghapus Data?',
                    showCancelButton: true,
                    showConfirmButton: true,
                    cancelButtonText: 'Batal',
                    confirmButtonText: 'Ya, Hapus!'
                }
            )
            .then(result => {
                if (result.isConfirmed)
                    destroy(route('input-data-skor.hapus', { id: id }), {
                        onSuccess: () => {
                            toast.success('Berhasil Hapus Data  ')
                        }
                    })
            })
    }

    return (
        <>
            <Head title='Input Peraturan' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 text-lg text-center text-slate-600 font-bold uppercase mb-2">input peraturan</div>
            <form onSubmit={submit} className='space-y-3'>
                <InputArea
                    name='keterangan'
                    label='keterangan'
                    value={data.keterangan}
                    message={errors.keterangan}
                    handleChange={onHandleChange}
                />

                <div className="lg:grid lg:grid-cols-5">
                    <InputText
                        name='skor'
                        label='jumlah skor'
                        value={data.skor}
                        message={errors.skor}
                        handleChange={onHandleChange}
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
                                Keterangan
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Skor
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listDataSkor && listDataSkor.map((skor, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {skor.keterangan}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    {skor.skor}
                                </td>
                                <td className="py-2 px-2 font-medium text-slate-600">
                                    <Hapus onClick={() => handleDelete(skor.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

InputDataSkor.layout = page => <AppLayout children={page} />
export default InputDataSkor