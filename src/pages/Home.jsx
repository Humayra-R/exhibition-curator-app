import { Link } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Register } from "../components/Register"

export const Home = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user
    
    return (
        <>
        {!email && <Register />}
        {!email && <Link to="login" > Sign In </Link>}
        {email && <p> Hello {name} </p>}
        {email && <Link to="logout" > Sign Out </Link> }
        </>
    )
}