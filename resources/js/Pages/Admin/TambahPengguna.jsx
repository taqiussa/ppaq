import PrimaryButton from '@/Components/PrimaryButton'
import InputText from '@/Components/Sia/InputText'
import JenisKelamin from '@/Components/Sia/JenisKelamin'
import Role from '@/Components/Sia/Role'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-toastify'

const TambahPengguna = ({ listRole }) => {

    const { data, setData, post, errors, processing } = useForm({
        name: '',
        username: '',
        role: '',
        jenis_kelamin: '',
        password: '',
        password_confirmation: '',
    })

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('tambah-pengguna.simpan'), {
            onSuccess: () => {
                toast.success('Berhasil Tambah Pengguna')
                setData({ ...data, password: '', password_confirmation: '' })
            }
        })
    }

    return (
        <>
            <Head title='Tambah Pengguna' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 font-bold text-center text-lg text-slate-600 uppercase mb-2">
                tambah pengguna
            </div>
            <form onSubmit={submit}>

                <div className="lg:grid lg:grid-cols-4 lg:gap-2 lg:space-y-0 space-y-3 mb-3">
                    <InputText
                        name='name'
                        label='name'
                        value={data.name}
                        message={errors.name}
                        handleChange={onHandleChange}
                    />
                    <InputText
                        name='username'
                        label='username'
                        value={data.username}
                        message={errors.username}
                        handleChange={onHandleChange}
                    />

                    <Role
                        name='role'
                        value={data.role}
                        message={errors.role}
                        handleChange={onHandleChange}
                        listRole={listRole}
                    />

                    <JenisKelamin
                        name='jenis_kelamin'
                        value={data.jenis_kelamin}
                        message={errors.jenis_kelamin}
                        handleChange={onHandleChange}
                    />

                    <InputText
                        name='password'
                        label='password'
                        type='password'
                        value={data.password}
                        message={errors.password}
                        handleChange={onHandleChange}
                    />
                    <InputText
                        name='password_confirmation'
                        label='konfirmasi password'
                        type='password'
                        value={data.password_confirmation}
                        message={errors.password_confirmation}
                        handleChange={onHandleChange}
                    />
                </div>
                <div className="py-3">
                    <PrimaryButton onClick={submit} children='simpan' disabled={processing} />
                </div>
            </form>
        </>
    )
}

TambahPengguna.layout = page => <AppLayout children={page} />
export default TambahPengguna