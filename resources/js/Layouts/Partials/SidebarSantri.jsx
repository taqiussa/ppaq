import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarSantri = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Santri
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('administrasi')} active={route().current('administrasi')} label='administrasi' />
                <SidebarLink closeSide={closeSide} href={route('bilhifzhi')} active={route().current('bilhifzhi')} label='bilhifzhi' />
                <SidebarLink closeSide={closeSide} href={route('binnadzor')} active={route().current('binnadzor')} label='binnadzor' />
                <SidebarLink closeSide={closeSide} href={route('halaqoh')} active={route().current('halaqoh')} label='halaqoh' />
                <SidebarLink closeSide={closeSide} href={route('kehadiran')} active={route().current('kehadiran')} label='kehadiran' />
            </div>
        </div>
    )
}

export default SidebarSantri