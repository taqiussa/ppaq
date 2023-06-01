import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarPendidikan = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Bendahara
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('input-absensi')} active={route().current('input-absensi')} label='input absensi' />
            </div>
        </div>
    )
}

export default SidebarPendidikan