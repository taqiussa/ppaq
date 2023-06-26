import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarPengasuh = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Pengasuh
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('data-induk-alumni')} active={route().current('data-induk-alumni')} label='data induk alumni' />
                <SidebarLink closeSide={closeSide} href={route('data-induk-santri')} active={route().current('data-induk-santri')} label='data induk santri' />
                <SidebarLink closeSide={closeSide} href={route('tambah-alumni')} active={route().current('tambah-alumni')} label='tambah alumni' />
                <SidebarLink closeSide={closeSide} href={route('tambah-santri')} active={route().current('tambah-santri')} label='tambah santri' />
                <SidebarLink closeSide={closeSide} href={route('print-absensi')} active={route().current('print-absensi')} label='print absensi' />
                <SidebarLink closeSide={closeSide} href={route('print-pelanggaran')} active={route().current('print-pelanggaran')} label='print pelanggaran' />
                <SidebarLink closeSide={closeSide} href={route('print-pembayaran')} active={route().current('print-pembayaran')} label='print pembayaran' />
                <SidebarLink closeSide={closeSide} href={route('print-pendidikan')} active={route().current('print-pendidikan')} label='print pendidikan' />
                <SidebarLink closeSide={closeSide} href={route('print-tes-semester')} active={route().current('print-tes-semester')} label='print tes semester' />
                <SidebarLink closeSide={closeSide} href={route('rekap-pelanggaran')} active={route().current('rekap-pelanggaran')} label='rekap pelanggaran' />
                <SidebarLink closeSide={closeSide} href={route('rekap-pembayaran')} active={route().current('rekap-pembayaran')} label='rekap pembayaran' />
                <SidebarLink closeSide={closeSide} href={route('saldo-skor')} active={route().current('saldo-skor')} label='saldo skor' />
            </div>
        </div>
    )
}

export default SidebarPengasuh