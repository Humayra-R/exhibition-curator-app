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
        <>
            {!email && <Navigate to="/login" />}
            <div className="dashboard">
                <div>
                    {email && <h3> {name}'s Gallery </h3>}  
                </div>
                <div>
                    {email && userArtworks.length === 0 && <p> <Link to="/explore">Curate</Link> a new collection </p>}
                </div>
                    {email && userArtworks.length > 0 && <button aria-label="button for deleting all artworks in the current exhibition" onClick={() => {
                    setUserArtworks([])
                }} > Delete Collection </button>}
                {!email && <p> <Link to="/login">Sign In</Link>/<Link to="/">Up</Link> to start collecting </p>}
            </div>    
            {email && userArtworks.length > 0 && <DisplayArtwork data={userArtworks} />}
        </>
        
    )
}