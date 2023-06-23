import axios from "axios"

const getTashihPengasuh = async (nis) => {
    try {
        const response = await axios.post(
            route('get-tashih-pengasuh',
                {
                    nis: nis
                })
        )
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

export default getTashihPengasuh