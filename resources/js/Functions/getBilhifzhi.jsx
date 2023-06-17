import axios from "axios"

const getBilhifzhi = async (nis, kategoriId) => {
    try {
        const response = await axios.post(
            route('get-bilhifzhi',
                {
                    nis: nis,
                    kategoriId: kategoriId
                })
        )
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

export default getBilhifzhi