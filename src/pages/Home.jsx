import { Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Register } from "../components/Register"

export const Home = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user
    
    return (
        <>
        <p> Welcome to Exhibit!  </p>
        <p> A digital space for your artistic voice and vision. </p>  
        <p> Just register or sign in to start curating your virtual gallery. </p>      

        {!email && <Register />}
        {!email && <Link to="login" > Sign In </Link>}
        </>
    )
}