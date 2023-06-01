import axios from "axios"

const getAllPembayaran = async (tahun) => {
    try {
        const response = await axios.post(
            route('get-all-pembayaran',
                {
                    tahun: tahun,
                })
        )
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

export default getAllPembayaran