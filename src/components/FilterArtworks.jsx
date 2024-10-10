import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select"
import { filterByMedium } from "../assets/data/filterByMedium"
import { getMuseumData } from "../services/getMuseumData";
import { getArtInstFilteredData } from "../services/getArtInstFilteredData";
import { DisplayArtwork } from "../components/DisplayArtworks"
import { shuffleData } from "./utils/shuffleData";
import { useErrorBoundary } from "react-error-boundary"
import { Loader } from "../components/Loader"
import "../assets/css/filterbox.css"

export const FilterByMedium = ({ exploreArtworks }) => {
    
    const [ isLoading, setIsLoading ] = useState(false)
    
    const [ searchParams, setSearchParams ] = useSearchParams()

    const [ selectedOption, setSelectedOption ] = useState();

    const [ paramHistory, setParamHistory ] = useState([])

    const [ artworks, setArtworks ] = useState([])

    const { showBoundary } = useErrorBoundary()   

    const filterQuery = searchParams.get('artwork-by-medium')

    console.log(filterQuery, 'filt');
    

    let isValidFilterQuery
    if (filterQuery) {

        filterByMedium.forEach((opt) => {
            if (filterQuery.toLowerCase() === filterByMedium.value) {
                isValidFilterQuery = true
            }
        })
    }    
    
    useEffect(() => {
        
        if (selectedOption || isValidFilterQuery) {
            
            const { value } = selectedOption

            const newParams = new URLSearchParams(searchParams)
                newParams.set('artwork-by-medium', value || filterQuery)
                setSearchParams(newParams)

            setParamHistory((curr) => {
                return [ ...curr, value ]
            })
            
            let allArtworks = []

            const artworkData = async () => {
                try {

                    setIsLoading(true)
                    
                    const museumPaintingRecords = await getMuseumData(value)

                    museumPaintingRecords.forEach((record) => {
                        allArtworks.push(record)
                    })
                    
                    const artInstArtworks = await getArtInstFilteredData(value)
                    
                    artInstArtworks.forEach((artwork) => {
                        allArtworks.push(artwork)
                    })
                    
                    const shuffledArtworks = shuffleData(allArtworks)
                    
                    setArtworks(shuffledArtworks)

                    setIsLoading(false)
                }
                catch (err) {
                    setIsLoading(false)
                    showBoundary(err)
                }
            } 

        artworkData()
        } 
        else {
            
            const newParams = new URLSearchParams(searchParams)
            newParams.delete('artwork-by-medium', paramHistory[paramHistory.length - 1])
            setSearchParams(newParams)
            
            setArtworks(exploreArtworks)
        }
    }, [selectedOption, filterQuery])

    return (
        <>
            <div className="filter-section">
                    <div>
                        <h3>Filter Artworks</h3>
                    </div>
                    <div>
                        <Select className="filter-box"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={filterByMedium}
                            placeholder="Select option"
                            isClearable
                        /> 
                    </div>
            </div>
            <DisplayArtwork data={artworks} />
            {isLoading && <Loader />}
        </>
    )
}