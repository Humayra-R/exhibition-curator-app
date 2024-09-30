import { useEffect, useContext } from "react"
import { UserContext } from "../context/UserContext"

export const Logout = () => {

    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    useEffect(() => {
        if (email) {
            setUserArtworks([])
        }
    }, [])
}