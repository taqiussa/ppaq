import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const InputDataSkor = () => {
    return (
        <>
        <Head title='Input Data Skor' />
        </>
    )
}

InputDataSkor.layout = page => <AppLayout children={page} />
export default InputDataSkor