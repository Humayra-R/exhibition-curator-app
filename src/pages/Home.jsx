import { Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Register } from "../components/Register"
import "../assets/css/form.css"

export const Home = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user
    
    return (
        <div className="container">
            <div className="home-text">
            <h2>Welcome to Exhibit</h2> 
                <div className="text">
                    <p className="form-subheading">A digital space for expressing your artistic voice.</p>
                    {!email && <p className="form-info">Register or sign in to start curating your exhibition.</p>}  
                    {email && <p className="form-info" > Head over to your <Link to="/dashboard" >dashboard</Link> or  <Link to="/explore" >browse artworks</Link></p>}
                </div>
 
            </div>
            <div className="form-and-link">
                <div>
                    {!email && <h3>Register:</h3>}
                </div>
                <div>
                {!email && <Register />} 
                </div>
            </div>
        </div>
    )
}