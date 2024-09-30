import axios from "axios"
import { checkInstData } from "./utils/checkInstData"

export const getArtInstData = async (pageNo = 1) => {
    const { data:result } = await axios.get(`https://api.artic.edu/api/v1/artworks?page=${pageNo}&limit=70`)

    const { data } = result

    const checkedData = checkInstData(data)

    return checkedData
}