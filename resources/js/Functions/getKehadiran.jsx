import axios from "axios"

const getKehadiran = async (tahun) => {
    try {
        const response = await axios.post(
            route('get-kehadiran',
                {
                    tahun: tahun
                })
        )
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

export default getKehadiran