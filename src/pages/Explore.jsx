import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { GalleryContext } from "../context/GalleryContext"
import { getMuseumData } from "../services/getMuseumData"
import { checkData } from "../services/utils/checkData"


export const Explore = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    const [ userArtworks, setUserArtworks ] = useContext(GalleryContext)

    const [ artworks, setArtworks ] = useState([])

    useEffect(() => {
        (async () => {
            let pageNo = 1
            const museumPaintingRecords =  await getMuseumData('painting', pageNo)
            const museumPaintingData = checkData(museumPaintingRecords)
            setArtworks((curr) => {
                return {...curr, paintings: museumPaintingData}
            })
        })()
    }, [])

    return (
        <>
            <h2> Explore Artworks </h2>
        </>
    )
}