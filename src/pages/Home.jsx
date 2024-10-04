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
                    <p className="brief">A digital space for expressing your artistic voice.</p>
                    {!email && <p className="conditioned">Register or sign in to start curating your exhibition.</p>}  
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