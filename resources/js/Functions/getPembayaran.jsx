import axios from "axios"

const getPembayaran = async (tahun, nis) => {
    try {
        const response = await axios.post(
            route('get-pembayaran',
                {
                    tahun: tahun,
                    nis: nis
                })
        )
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

export default getPembayaran