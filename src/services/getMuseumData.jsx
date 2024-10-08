import axios from "axios"
import { checkMuseData } from "./utils/checkMuseData"


export const getMuseumData = async (medium = 'painting', pageNo = 1) => {

    const { data } = await axios.get(`https://api.vam.ac.uk/v2/objects/search?q_object_type=${medium}&page_size=100&page=${pageNo}`)

    const { records } = data

    const checkedData = checkMuseData(records)

    return checkedData
}
