import PrimaryButton from '@/Components/PrimaryButton'
import Bulan from '@/Components/Sia/Bulan'
import FileUpload from '@/Components/Sia/FileUpload'
import InputText from '@/Components/Sia/InputText'
import Tahun from '@/Components/Sia/Tahun'
import Tanggal from '@/Components/Sia/Tanggal'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import moment from 'moment'
import React from 'react'
import { toast } from 'react-toastify'

const TambahAlumni = () => {

    const { data, setData, post, errors, processing } = useForm({
        nama: '',
        nis: '',
        nisn: '',
        nik: '',
        tempatLahir: '',
        tanggalLahir: '',
        namaAyah: '',
        namaIbu: '',
        alamatLengkap: '',
        rt: '',
        rw: '',
        desa: '',
        kecamatan: '',
        kabupaten: '',
        provinsi: '',
        noKk: '',
        nikAyah: '',
        nikIbu: '',
        tanggal: '',
        tahun: '',
        bulan: ''
    })

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.type == 'file' ? e.target.files[0] : e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('tambah-alumni.simpan'), {
            onSuccess: () => {
                toast.success('Berhasil Tambah Alumni')
                setData({ ...data })
            }
        })
    }

    return (
        <>
            <Head title='Tambah Alumni' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 text-center text-slate-600 text-lg font-bold uppercase mb-2">tambah alumni</div>
            <div className="lg:grid lg:grid-cols-4 lg:gap-2 lg:space-y-0 space-y-3 mb-3">
                <InputText
                    name='nama'
                    label='nama'
                    value={data.nama}
                    message={errors.nama}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='nis'
                    label='NIS'
                    value={data.nis}
                    message={errors.nis}
                    handleChange={onHandleChange}
                />

                <div className="col-span-2">

                    <InputText
                        name='nisn'
                        label='No. Induk Pokok (512332410092121614)'
                        value={data.nisn}
                        message={errors.nisn}
                        handleChange={onHandleChange}
                    />
                </div>

                <InputText
                    name='nik'
                    label='NIK'
                    value={data.nik}
                    message={errors.nik}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='noKk'
                    label='no KK'
                    value={data.noKk}
                    message={errors.noKk}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='tempatLahir'
                    label='tempat lahir'
                    value={data.tempatLahir}
                    message={errors.tempatLahir}
                    handleChange={onHandleChange}
                />

                <Tanggal
                    name='tanggalLahir'
                    label='tanggal lahir'
                    value={data.tanggalLahir}
                    message={errors.tanggalLahir}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='namaAyah'
                    label='nama ayah'
                    value={data.namaAyah}
                    message={errors.namaAyah}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='nikAyah'
                    label='NIK ayah'
                    value={data.nikAyah}
                    message={errors.nikAyah}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='namaIbu'
                    label='nama ibu'
                    value={data.namaIbu}
                    message={errors.namaIbu}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='nikIbu'
                    label='NIK ibu'
                    value={data.nikIbu}
                    message={errors.nikIbu}
                    handleChange={onHandleChange}
                />

                <div className="col-span-2">
                    <InputText
                        name='alamatLengkap'
                        label='alamat (jalan, gang, no. rumah)'
                        value={data.alamatLengkap}
                        message={errors.alamatLengkap}
                        handleChange={onHandleChange}
                    />
                </div>

                <InputText
                    name='rt'
                    label='rt'
                    value={data.rt}
                    message={errors.rt}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='rw'
                    label='rw'
                    value={data.rw}
                    message={errors.rw}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='desa'
                    label='desa'
                    value={data.desa}
                    message={errors.desa}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='kecamatan'
                    label='kecamatan'
                    value={data.kecamatan}
                    message={errors.kecamatan}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='kabupaten'
                    label='kabupaten'
                    value={data.kabupaten}
                    message={errors.kabupaten}
                    handleChange={onHandleChange}
                />

                <InputText
                    name='provinsi'
                    label='provinsi'
                    value={data.provinsi}
                    message={errors.provinsi}
                    handleChange={onHandleChange}
                />

                <Tanggal
                    name='tanggal'
                    label='tanggal boyong'
                    value={data.tanggal}
                    message={errors.tanggal}
                    handleChange={onHandleChange}
                />

                <Tahun
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

                <FileUpload
                    name='foto'
                    label='foto jika ada'
                    message={errors.foto}
                    handleChange={onHandleChange}
                />

            </div>

            <PrimaryButton
                children='simpan'
                onClick={submit}
                disabled={processing}
            />
        </>
    )
}

TambahAlumni.layout = page => <AppLayout children={page} />
export default TambahAlumni