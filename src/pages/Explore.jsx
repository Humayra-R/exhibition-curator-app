import { Link } from "react-router-dom"
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { GalleryContext } from "../context/GalleryContext"
export const Explore = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    const [ artworks, setArtworks ] = useContext(GalleryContext)

    useEffect(() => {

    }, [])

    return (
        <>
            <h2> Explore Artworks </h2>
        </>
    )
}