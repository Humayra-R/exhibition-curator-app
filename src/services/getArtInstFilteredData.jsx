import axios from "axios"
import { checkFilterInstData } from "./utils/checkFilterInstData"

export const getArtInstFilteredData = async (option, pageNo = 1) => {

                const { data:result } = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${option}&fields=id,title,artist_title,date_end,image_id,artwork_type_title,main_reference_number&page=${pageNo}&limit=80`)

                const { data } = result
                
                const checkedData = checkFilterInstData(data, option)  
                
                return checkedData   
        
}