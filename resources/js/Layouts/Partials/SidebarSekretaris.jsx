import SidebarLink from '@/Components/Sia/SidebarLink'
import React from 'react'

const SidebarSekretaris = ({ closeSide }) => {
    return (
        <div className='py-1'>
            <div className='text-slate-600 font-bold'>
                Sekretaris
            </div>
            <div>
                <SidebarLink closeSide={closeSide} href={route('atur-boyong')} active={route().current('atur-boyong')} label='atur boyong' />
                <SidebarLink closeSide={closeSide} href={route('data-induk-alumni')} active={route().current('data-induk-alumni')} label='data induk alumni' />
                <SidebarLink closeSide={closeSide} href={route('data-induk-santri')} active={route().current('data-induk-santri')} label='data induk santri' />
                <SidebarLink closeSide={closeSide} href={route('tambah-alumni')} active={route().current('tambah-alumni')} label='tambah alumni' />
                <SidebarLink closeSide={closeSide} href={route('tambah-santri')} active={route().current('tambah-santri')} label='tambah santri' />
            </div>
        </div>
    )
}

export default SidebarSekretaris