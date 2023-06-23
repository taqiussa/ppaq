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
                <SidebarLink closeSide={closeSide} href={route('input-halaqoh')} active={route().current('input-halaqoh')} label='input halaqoh' />
                <SidebarLink closeSide={closeSide} href={route('input-tes-semester')} active={route().current('input-tes-semester')} label='input tes semester' />
                <SidebarLink closeSide={closeSide} href={route('print-absensi')} active={route().current('print-absensi')} label='print absensi' />
                <SidebarLink closeSide={closeSide} href={route('print-pendidikan')} active={route().current('print-pendidikan')} label='print pendidikan' />
            </div>
        </div>
    )
}

export default SidebarPendidikan