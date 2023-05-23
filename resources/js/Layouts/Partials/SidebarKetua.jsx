import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarKetua = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Ketua Pengurus
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('data-induk-santri')} active={route().current('data-induk-santri')} label='data induk santri' />
            </div>
        </div>
    )
}

export default SidebarKetua