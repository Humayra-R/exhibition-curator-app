import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

export const Dashboard = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    console.log(name);
    
    return (
        <div>
            {name && <p> {name}'s Gallery </p>}
        </div>
    )
}