import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom"
import { UserContext } from "../context/UserContext";
import "../assets/css/navbar.css"

export const NavBar = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    const [ isMenuOpen, setisMenuOpen] = useState(false)


    useEffect(() => {
        if (isMenuOpen) {
            setTimeout(() => {
                setisMenuOpen(false)
            }, "13000")
        }
    }, [isMenuOpen])

    return (
    <>
        <>
            <nav>
                <h1> EXHIBIT </h1>
                <div className="menu" onClick={() => {setisMenuOpen(!isMenuOpen)}} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={isMenuOpen ? "open" : ""} >
                    <li>
                        <NavLink to="/" >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" >
                            Explore
                        </NavLink>
                    </li>
                    {!email && <li>
                        <NavLink to="login" >
                            Sign In
                        </NavLink> 
                    </li>}
                    {email && <li>
                        <NavLink to="/dashboard" > 
                           {name[0].toUpperCase() + name.slice(1)}
                        </NavLink>
                    </li>}
                    {email && <li className="logout-item" onClick={() => {setUser({name: '', email: ''})}}  >
                        Sign Out
                    </li>}
                </ul>
            </nav>  
        </>
        <main>
            <Outlet />
        </main> 
    </>
    )   
}