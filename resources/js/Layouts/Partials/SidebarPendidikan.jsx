import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarPendidikan = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Pendidikan
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('input-absensi')} active={route().current('input-absensi')} label='input absensi' />
                <SidebarLink closeSide={closeSide} href={route('input-bilhifzhi')} active={route().current('input-bilhifzhi')} label='input bilhifzhi' />
                <SidebarLink closeSide={closeSide} href={route('input-binnadzor')} active={route().current('input-binnadzor')} label='input binnadzor' />
            </div>
        </div>
    )
}

export default SidebarPendidikan