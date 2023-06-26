import Hapus from '@/Components/Sia/Hapus'
import InputText from '@/Components/Sia/InputText'
import Sweet from '@/Components/Sia/Sweet'
import Tahun from '@/Components/Sia/Tahun'
import { hariTanggal, penjumlahan } from '@/Functions/functions'
import getPelanggaran from '@/Functions/getPelanggaran'
import getSkor from '@/Functions/getSkor'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { trackPromise } from 'react-promise-tracker'

const RekapPelanggaran = ({ initTahun }) => {

    const { data, setData, delete: destroy } = useForm({
        tahun: initTahun,
        search: ''
    })

    const [listPelanggaran, setListPelanggaran] = useState([])

    const [page, setPage] = useState(0);
    const postsPerPage = 10;
    const numberOfPostsVisited = page * postsPerPage;
    const totalPages = Math.ceil(listPelanggaran?.length / postsPerPage);
    const changePage = ({ selected }) => {
        setPage(selected);
    };

    const filteredData = listPelanggaran?.filter((list) => {
        const searchTerm = data.search.toLowerCase();
        const user = list.user?.name.toLowerCase();
        return (
            user.includes(searchTerm)
        );
    });

    async function getListPelanggaran() {
        const res = await getPelanggaran(data.tahun)
        setListPelanggaran(res.listPelanggaran)
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const handleDelete = (id) => {

        Sweet
            .fire({
                title: 'Hapus Pelanggaran',
                text: 'Anda Yakin Menghapus ?',
                showCancelButton: true,
                showConfirmButton: true,
                cancelButtonText: 'Batal',
                confirmButtonText: 'Ya, Hapus!'
            })
            .then(result => {
                if (result.isConfirmed)
                    destroy(route('rekap-pelanggaran.hapus', { id: id }), {
                        onSuccess: () => {
                            setData({ ...data })
                            trackPromise(getListPelanggaran())
                        }
                    })
            })
    }

    useEffect(() => {
        if (data.tahun)
            trackPromise(getListPelanggaran())
    }, [data.tahun])
    return (
        <>
            <Head title='Rekap Pelanggaran' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 font-bold text-center text-lg text-slate-600 uppercase mb-2">
                rekap pelanggaran
            </div>
            <div className="lg:grid lg:grid-cols-5 lg:gap-2 py-2">
                <Tahun
                    name='tahun'
                    value={data.tahun}
                    handleChange={onHandleChange}
                />
                <div className="col-span-2">

                    <InputText
                        id='search'
                        name='search'
                        value={data.search}
                        label='search'
                        handleChange={onHandleChange}
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-600">
                    <thead className="text-sm text-slate-600 bg-gray-50">
                        <tr>
                            <th scope='col' className="py-3 px-2">
                                No
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Nama
                            </th>
                            <th scope='col' className="py-3 px-2 text-center">
                                Tanggal
                            </th>
                            <th scope='col' className="py-3 px-2 text-center">
                                Keterangan
                            </th>
                            <th scope='col' className="py-3 px-2 text-center">
                                Skor
                            </th>
                            <th scope='col' className="py-3 px-2 text-center">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listPelanggaran &&
                            filteredData
                                .slice(numberOfPostsVisited, numberOfPostsVisited + postsPerPage)
                                .map((list, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            {index + 1 + (page * 10)}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {list.user?.name}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            {hariTanggal(list.tanggal)}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            {list.skors?.keterangan}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            {list.skors?.skor}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            <Hapus onClick={() => handleDelete(list.id)} />
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

RekapPelanggaran.layout = page => <AppLayout children={page} />
export default RekapPelanggaran