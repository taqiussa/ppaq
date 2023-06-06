import axios from "axios"

const getBinnadzor = async (nis) => {
    try {
        const response = await axios.post(
            route('get-binnadzor',
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

export default getBinnadzor