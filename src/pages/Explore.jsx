import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { GalleryContext } from "../context/GalleryContext"
import { getMuseumData } from "../services/getMuseumData"
import { checkData } from "../services/utils/checkData"
import { getArtInstData } from "../services/getArtInstituteData"

export const Explore = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    const [ userArtworks, setUserArtworks ] = useContext(GalleryContext)

    const [ artworks, setArtworks ] = useState([])

    useEffect(() => {
        let allArtworks = []

        let pageNo = 1

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

                setArtworks(allArtworks)
            }
        }

        artworkData(pageNo)
    }, [])

    return (
        <>
            <h2> Explore Artworks </h2>
        </>
    )
}