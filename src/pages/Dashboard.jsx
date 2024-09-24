import { Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { GalleryContext } from "../context/GalleryContext"
import { DisplayArtwork } from "../components/DisplayArtworks"

export const Dashboard = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    const [ userArtworks, setUserArtworks ] = useContext(GalleryContext)

    return (
        <div>
            {!email && <Navigate to="/login" />}
            <div>
              {email && <p> {name}'s Gallery </p>}  
            </div>
            <div>
               {email && userArtworks.length === 0 && <p> <Link to="/explore">Curate</Link> a new collection </p>}
               {email && userArtworks.length > 0 && <button aria-label="button for deleting all artworks in the current exhibition" onClick={() => {
                setUserArtworks([])
               }} > del </button>}
            </div>
            <div>
                {!email && <p> <Link to="/login">Sign In</Link>/<Link to="/">Up</Link> to start collecting </p>}
            </div>
            {email && userArtworks.length > 0 && <DisplayArtwork data={userArtworks} />}
        </div>
    )
}