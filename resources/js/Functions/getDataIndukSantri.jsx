import axios from "axios"

const getDataIndukSantri = async (tahun) => {
    try {
        const response = await axios.post(
            route('get-data-induk-santri',
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

export default getDataIndukSantri