import axios from "axios"

const getPelanggaran = async (tahun) => {
    try {
        const response = await axios.post(
            route('get-pelanggaran',
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

export default getPelanggaran