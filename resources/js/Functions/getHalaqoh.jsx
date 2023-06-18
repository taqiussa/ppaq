import axios from "axios"

const getHalaqoh = async (nis, kategoriId) => {
    try {
        const response = await axios.post(
            route('get-halaqoh',
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

export default getHalaqoh