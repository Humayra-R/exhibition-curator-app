import { Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Register } from "../components/Register"

export const Home = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user
    
    return (
        <div className="reg-form">
            <div>
                <h2> Welcome to Exhibit</h2> 
                <p> A digital space for your artistic voice. <br />
                Register or sign in to start curating your gallery.   
                </p>   
            </div>
            <div>
                {!email && <Register />}
                {!email && <Link to="login" > Sign In </Link>}
            </div>
            
        </div>
    )
}