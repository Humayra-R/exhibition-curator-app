import { Navigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"

export const Logout = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    useEffect(() => {
        setUser((...prev) => {
            return { ...prev, 
                name: '',
                email: ''
            }
        })
    })

    return (
        <div>
           {!email && <Navigate to="/login" />}
           Sign In
        </div>
    )
}