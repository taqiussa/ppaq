import Tahun from '@/Components/Sia/Tahun'
import { penjumlahan } from '@/Functions/functions'
import getSkor from '@/Functions/getSkor'
import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { trackPromise } from 'react-promise-tracker'

const SaldoSkor = ({ initTahun }) => {

    const [tahun, setTahun] = useState(initTahun)
    const [listSantri, setListSantri] = useState([])
    const [search, setSearch] = useState('')

    const [page, setPage] = useState(0);
    const postsPerPage = 10;
    const numberOfPostsVisited = page * postsPerPage;
    const totalPages = Math.ceil(listSantri?.length / postsPerPage);
    const changePage = ({ selected }) => {
        setPage(selected);
    };

    const filteredData = listSantri?.filter((list) => {
        const searchTerm = search.toLowerCase();
        const user = list.name.toLowerCase();
        return (
            user.includes(searchTerm)
        );
    });

    async function getListSantri() {
        const res = await getSkor(tahun)
        setListSantri(res.listSantri)
    }

    const onHandleChange = (e) => {
        setTahun(e.target.value)
    }

    useEffect(() => {
        if (tahun)
            trackPromise(getListSantri())
    }, [tahun])
    return (
        <>
            <Head title='Saldo Skor' />
            <div className="bg-emerald-200 border-b-2 border-emerald-500 font-bold text-center text-lg text-slate-600 uppercase mb-2">
                saldo skor
            </div>
            <div className="lg:grid lg:grid-cols-5 py-2">
                <Tahun
                    name='tahun'
                    value={tahun}
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
                                Nama
                            </th>
                            <th scope='col' className="py-3 px-2 text-center">
                                Total Skor
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listSantri &&
                            filteredData
                                .slice(numberOfPostsVisited, numberOfPostsVisited + postsPerPage)
                                .map((list, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            {index + 1 + (page * 10)}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {list.name}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            {penjumlahan(list.skors, 'skor')}
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

SaldoSkor.layout = page => <AppLayout children={page} />
export default SaldoSkor