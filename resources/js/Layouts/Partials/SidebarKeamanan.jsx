import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarKeamanan = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Keamanan
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('input-data-skor')} active={route().current('input-data-skor')} label='input peraturan' />
                <SidebarLink closeSide={closeSide} href={route('input-pelanggaran')} active={route().current('input-pelanggaran')} label='input pelanggaran' />
                <SidebarLink closeSide={closeSide} href={route('rekap-pelanggaran')} active={route().current('rekap-pelanggaran')} label='rekap pelanggaran' />
                <SidebarLink closeSide={closeSide} href={route('saldo-skor')} active={route().current('saldo-skor')} label='saldo skor' />
            </div>
        </div>
    )
}

export default SidebarKeamanan