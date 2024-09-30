import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom"
import { UserContext } from "../context/UserContext";
import { Dropdown } from "./Dropdown";
import "../assets/css/navbar.css"

export const NavBar = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user
    
    const [ showDropdown, setShowDropDown ] = useState(false)

    const [ isMenuOpen, setisMenuOpen] = useState(false)

    useEffect(() => {
        if (showDropdown) {
            setTimeout(() => {
                setShowDropDown(false)
            }, "10000")
        }
    }, [showDropdown])

    useEffect(() => {
        if (isMenuOpen) {
            setShowDropDown(false)
            setTimeout(() => {
                setisMenuOpen(false)
            }, "15000")
        }
    }, [isMenuOpen])

    return (
    <div>
        <div>
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
                        <NavLink to="/dashboard" onMouseEnter={() => setShowDropDown(true)} > 
                           {name[0].toUpperCase() + name.slice(1)}
                        </NavLink>
                    </li>}
                    {isMenuOpen && email && <li className="nav-item" onClick={() => {setUser({name: '', email: ''})}}  >
                            Sign Out
                        </li>}
                </ul>
            </nav>  
        </div>
        {showDropdown && !isMenuOpen && <div onMouseLeave={() => {setShowDropDown(false)}}>  <Dropdown /> </div>}
        <main>
            <Outlet />
        </main> 
    </div>
    )   
}