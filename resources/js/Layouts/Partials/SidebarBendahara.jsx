import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarBendahara = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Bendahara
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('atur-kategori-pembayaran')} active={route().current('atur-kategori-pembayaran')} label='atur kategori pembayaran' />
                <SidebarLink closeSide={closeSide} href={route('atur-wajib-bayar')} active={route().current('atur-wajib-bayar')} label='atur wajib bayar' />
                <SidebarLink closeSide={closeSide} href={route('input-pembayaran')} active={route().current('input-pembayaran')} label='input pembayaran' />
                <SidebarLink closeSide={closeSide} href={route('rekap-pembayaran')} active={route().current('rekap-pembayaran')} label='rekap pembayaran' />
            </div>
        </div>
    )
}

export default SidebarBendahara