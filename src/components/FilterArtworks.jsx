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
    
    useEffect(() => {

        let allArtworks = []

        const artworkData = async (medium) => {
            try {
                setIsLoading(true)
                
                const museumPaintingRecords = await getMuseumData(medium)

                museumPaintingRecords.forEach((record) => {
                    allArtworks.push(record)
                })
                
                const artInstArtworks = await getArtInstFilteredData(medium)
                
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

        const updateParams = (paramVal) => {
            const newParams = new URLSearchParams(searchParams)
            newParams.set('artwork-by-medium', paramVal)
            setSearchParams(newParams)
        }
        
        if (filterQuery && !selectedOption && paramHistory[paramHistory.length - 1] !== filterQuery.toLowerCase()) {

                filterByMedium.forEach((opt, index) => {

                    if (filterQuery.toLowerCase() === opt.value) {
                        setSelectedOption(opt)
                    }

                })
        }

        if (selectedOption) {

            const { value } = selectedOption

            setParamHistory((curr) => {
                return [ ...curr, value]
            })
            
            updateParams(value)

            artworkData(value)
        } 
        else if (!selectedOption) {
            
            const newParams = new URLSearchParams(searchParams)
            newParams.delete('artwork-by-medium', paramHistory[paramHistory.length - 1])
            setSearchParams(newParams)
            
            setArtworks(exploreArtworks)
        }
    }, [selectedOption])

    return (
        <>
            <div className="filter-section">
                    <div>
                        <h3>Filter Artworks</h3>
                    </div>
                    <div>
                        <Select className="filter-box"
                            value={selectedOption}
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