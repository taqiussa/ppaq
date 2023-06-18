import axios from "axios"

const getTesSemester = async (nis) => {
    try {
        const response = await axios.post(
            route('get-tes-semester',
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

export default getTesSemester