import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { GalleryContext } from "../context/GalleryContext"
import { getMuseumData } from "../services/getMuseumData"
import { checkData } from "../services/utils/checkData"
import { getArtInstData } from "../services/getArtInstituteData"
import { DisplayArtwork } from "../components/DisplayArtworks"
import { shuffleData } from "../components/utils/shuffleData"

export const Explore = () => {
    
    const [ artworks, setArtworks ] = useState([])

    useEffect(() => {
        let pageNo = 1

        let allArtworks = []

        const artworkData = async (pageNo) => {

            const museumPaintingRecords =  await getMuseumData('painting', pageNo)

            const museumPaintingData = checkData(museumPaintingRecords)

            museumPaintingData.forEach((painting) => {
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
                console.log(allArtworks, 'explore data length');
                
            }
        }
        artworkData(pageNo)
    }, [])

    return (
        <div>
            <h2> Explore Artworks </h2>
            <DisplayArtwork data={artworks} />
        </div>
    )
}