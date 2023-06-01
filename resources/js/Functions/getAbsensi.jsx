import axios from "axios"

const getAbsensi = async (tahun, bulan) => {
    try {
        const response = await axios.post(
            route('get-absensi',
                {
                    tahun: tahun,
                    bulan: bulan
                })
        )
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

export default getAbsensi