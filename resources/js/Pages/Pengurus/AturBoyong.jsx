import PrimaryButton from '@/Components/PrimaryButton'
import Bulan from '@/Components/Sia/Bulan'
import SearchableSelect from '@/Components/Sia/SearchableSelect'
import Tahun from '@/Components/Sia/Tahun'
import Tanggal from '@/Components/Sia/Tanggal'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import moment from 'moment/moment'
import React from 'react'
import { toast } from 'react-toastify'

const AturBoyong = ({ initTahun, initBulan, listSantri }) => {

    const { data, setData, post, errors, processing } = useForm({
        tanggal: moment(new Date()).format('YYYY-MM-DD'),
        tahun: initTahun,
        bulan: initBulan,
        nis: '',
    })

    const options = listSantri.map((santri) => ({
        value: santri.nis,
        label: santri.name
    }))

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('atur-boyong.simpan'),
            {
                onSuccess: () => {
                    toast.success('Berhasil Simpan Data Alumni')
                    setData({ ...data })
                }
            })
    }

    return (
        <>
            <Head title='Atur Boyong' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">Atur Boyong</div>
            <form onSubmit={submit}>

                <div className='lg:grid lg:grid-cols-5 lg:gap-2 lg:space-y-0 space-y-3 pb-2'>
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
                    <Tanggal
                        id='tanggal'
                        name='tanggal'
                        label='tanggal Boyong'
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


                </div>
                <PrimaryButton onClick={submit} disabled={processing} children='simpan' />
            </form>
        </>
    )
}

AturBoyong.layout = page => <AppLayout children={page} />
export default AturBoyong