import InputText from '@/Components/Sia/InputText'
import { hariTanggal, namaBulanHijriyah, tanggal } from '@/Functions/functions'
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const DataIndukAlumni = ({ listSantri }) => {

    const { data, setData } = useForm({
        search: '',
    })

    const [page, setPage] = useState(0);
    const postsPerPage = 10;
    const numberOfPostsVisited = page * postsPerPage;
    const totalPages = Math.ceil(listSantri?.length / postsPerPage);
    const changePage = ({ selected }) => {
        setPage(selected);
    };

    const filteredData = listSantri?.filter((list) => {
        const searchTerm = data.search.toLowerCase();
        const santri = list?.name.toLowerCase();
        return (
            santri.includes(searchTerm)
        );
    });

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    return (
        <>
            <Head title='Data Induk Alumni' />
            <div className="font-bold text-lg text-center text-slate-600 uppercase border-b-2 border-emerald-500 mb-3 bg-emerald-200">
                data induk Alumni
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:gap-2 lg:space-y-0 grid grid-cols-2 gap-2 pb-2'>
                <InputText
                    id='search'
                    name='search'
                    value={data.search}
                    label='Cari'
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
                                NIS
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Nama
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Tempat, Tanggal Lahir
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Alamat
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Tanggal Boyong
                            </th>
                            <th scope='col' className="py-3 px-2 text-left">
                                Bulan, Tahun Boyong
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listSantri &&
                            filteredData
                                .slice(numberOfPostsVisited, numberOfPostsVisited + postsPerPage)
                                .map((santri, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-slate-300 odd:bg-slate-200">
                                        <td className="py-2 px-2 font-medium text-slate-600 text-center">
                                            {index + 1 + (page * 10)}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {santri.nis}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {santri.name}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {santri.biodata?.tempat_lahir}, {santri.biodata?.tanggal_lahir ? tanggal(santri.biodata?.tanggal_lahir) : null}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {santri.alamat?.alamat ?? '-'}, RT {santri.alamat?.rt ?? '-'} RW {santri.alamat?.rw ?? '-'} Desa {santri.alamat?.desa} - Kec. {santri.alamat?.kecamatan} - Kab. {santri.alamat?.kabupaten} - Prov. {santri.alamat?.provinsi}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {hariTanggal(santri.alumni?.tanggal)}
                                        </td>
                                        <td className="py-2 px-2 font-medium text-slate-600">
                                            {namaBulanHijriyah(santri.alumni?.bulan)}, {santri.alumni?.tahun}
                                        </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>
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
        </>
    )
}

DataIndukAlumni.layout = page => <AppLayout children={page} />
export default DataIndukAlumni