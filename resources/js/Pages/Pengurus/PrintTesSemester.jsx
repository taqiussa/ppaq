import PrintLink from '@/Components/Sia/PrintLink'
import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const PrintTesSemester = () => {

    return (
        <>
            <Head title='Print Tes Semester' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 text-lg text-center text-slate-600 font-bold uppercase mb-2">print tes semester</div>
            <div className="py-2 font-bold text-slate-600 text-md">Semua Santri</div>
            <PrintLink label='print semua' href={route('print-tes-semester.print')} />
        </>
    )
}

PrintTesSemester.layout = page => <AppLayout children={page} />
export default PrintTesSemester