import { Link } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { GalleryContext } from "../context/GalleryContext"

export const Dashboard = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    const [ artworks, setArtworks ] = useContext(GalleryContext)

    return (
        <div>
            <div>
              {name && <p> {name}'s Gallery </p>}  
            </div>
            <div>
               {artworks.length === 0 ? <p> <Link to="/explore">Curate</Link> a new collection </p> : <button type="submit" aria-label="button for deleting all added images"> Del </button>} 
            </div>
        </div>
    )
}