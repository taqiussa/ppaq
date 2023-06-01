import Hapus from '@/Components/Sia/Hapus';
import InputText from '@/Components/Sia/InputText';
import Sweet from '@/Components/Sia/Sweet';
import Tahun from '@/Components/Sia/Tahun';
import { hariTanggal, rupiah } from '@/Functions/functions';
import getAllPembayaran from '@/Functions/getAllPembayaran'
import AppLayout from '@/Layouts/AppLayout';
import { Head, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { trackPromise } from 'react-promise-tracker';
import { toast } from 'react-toastify';

const RekapPembayaran = ({ initTahun }) => {

    const { data, setData, errors, delete: destroy } = useForm({
        tahun: initTahun,
        search: '',
        listPembayaran: [],
    })

    const [page, setPage] = useState(0);
    const postsPerPage = 10;
    const numberOfPostsVisited = page * postsPerPage;
    const totalPages = Math.ceil(data.listPembayaran?.length / postsPerPage);
    const changePage = ({ selected }) => {
        setPage(selected);
    };

    const filteredData = data.listPembayaran?.filter((list) => {
        const searchTerm = data.search.toLowerCase();
        const user = list.user?.name.toLowerCase();
        return (
            user.includes(searchTerm)
        );
    });

    async function getDataPembayaran() {
        const response = await getAllPembayaran(data.tahun)
        setData({ ...data, listPembayaran: response.listPembayaran })
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const handleDelete = (id) => {
        Sweet
            .fire({
                title: 'Hapus',
                text: 'Anda Yakin Menghapus?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Ya, Hapus!',
                cancelButtonText: 'Batal'
            })
            .then((result) => {
                if (result.isConfirmed)
                    destroy(route('rekap-pembayaran.hapus', { id: id }),
                        {
                            onSuccess: () => {
                                toast.success('Berhasil Hapus Data Pembayaran')
                                setData({ ...data })
                                trackPromise(getDataPembayaran())
                            }
                        })
            })
    }

    useEffect(() => {
        if (data.tahun)
            trackPromise(getDataPembayaran())
    }, [data.tahun])

    return (
        <>
            <Head title='Rekap Pembayaran' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">rekap pembayaran</div>
            <div className='lg:grid lg:grid-cols-4 lg:gap-2 lg:space-y-0 space-y-3'>

                <Tahun
                    id='tahun'
                    name='tahun'
                    label='tahun'
                    value={data.tahun}
                    message={errors.tahun}
                    handleChange={onHandleChange}
                />

                <InputText
                    id='search'
                    name='search'
                    value={data.search}
                    message={errors.search}
                    label='search'
                    handleChange={onHandleChange}
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-600">
                    <thead className="text-sm text-slate-600 bg-gray-50">
                        <tr>
                            <th scope='col' className="py-3 px-2">
                                No
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Tanggal
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Santri
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Kategori Pembayaran
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Jumlah
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.listPembayaran &&
                            filteredData
                                .slice(numberOfPostsVisited, numberOfPostsVisited + postsPerPage)
                                .map((list, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            {index + 1 + (page * 10)}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {hariTanggal(list.created_at)}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {list.user?.name}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {list.kategori_pembayaran?.nama}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {rupiah(list.jumlah)}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600 inline-flex space-x-3">
                                            <Hapus
                                                onClick={() => handleDelete(list.id)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>
            <section className="my-2 overflow-x-auto">
                <ReactPaginate
                    pageRangeDisplayed={3} //The range of buttons pages displayed.
                    previousLabel={"Previous"} //lable for previous page button
                    nextLabel={"Next"} // lable for Next page button
                    pageCount={totalPages} // place here the variable for total number of pages
                    onPageChange={changePage} // place here the trigger event function
                    /// navigation CSS styling ///
                    containerClassName={"flex items-center my-4 space-x-1 text-slate-600"}
                    pageLinkClassName={"focus:shadow-outline transition-colors duration-150 border-emerald-500 hover:bg-emerald-300 rounded-md py-1 px-2 border"}
                    previousLinkClassName={"focus:shadow-outline transition-colors duration-150 border-emerald-500 hover:bg-emerald-300 rounded-l-md py-1 px-2 border"}
                    nextLinkClassName={"focus:shadow-outline transition-colors duration-150 border-emerald-500 hover:bg-emerald-300 rounded-r-md py-1 px-2 border"}
                    disabledLinkClassName={"text-gray-300 cursor-not-allowed hover:bg-white"}
                    activeLinkClassName={"focus:shadow-outline transition-colors duration-150 bg-emerald-500 text-emerald-100 cursor-pointer"}
                    /// end navigation styling ///
                    renderOnZeroPageCount={null}
                />
            </section>
        </>
    )
}

RekapPembayaran.layout = page => <AppLayout children={page} />
export default RekapPembayaran