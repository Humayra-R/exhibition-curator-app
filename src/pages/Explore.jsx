import { useState, useEffect } from "react"
import { getMuseumData } from "../services/getMuseumData"
import { getArtInstData } from "../services/getArtInstituteData"
import { DisplayArtwork } from "../components/DisplayArtworks"
import { shuffleData } from "../components/utils/shuffleData"
import { FilterByMedium } from "../components/FilterArtworks"


export const Explore = () => {
    
    const [ artworks, setArtworks ] = useState([])

    useEffect(() => {
        let pageNo = 1

        let allArtworks = []

        const artworkData = async (pageNo) => {

            const museumPaintingRecords = await getMuseumData('painting', pageNo)

            museumPaintingRecords.forEach((painting) => {
                allArtworks.push(painting)
            })

            if (allArtworks.length < 35) {
                pageNo++
                await artworkData(pageNo)
            }
            else {
                const artInstArtworks = await getArtInstData()
                
                artInstArtworks.forEach((artwork) => {
                    allArtworks.push(artwork)
                })
                
                const shuffledArtworks = shuffleData(allArtworks)
                
                setArtworks(shuffledArtworks)
                console.log(allArtworks.length, 'explore data length');
                
            }
        }
        artworkData(pageNo)
    }, [])

    return (
        <div>
            <h2> Explore Artworks </h2>
            <FilterByMedium />
            <DisplayArtwork data={artworks} />
        </div>
    )
}