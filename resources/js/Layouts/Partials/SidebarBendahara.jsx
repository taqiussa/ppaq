import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarBendahara = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Bendahara
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('atur-kategori-pemasukan')} active={route().current('atur-kategori-pemasukan')} label='atur kategori pemasukan' />
            </div>
        </div>
    )
}

export default SidebarBendahara