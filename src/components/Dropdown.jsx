import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import "../assets/css/dropdown.css"

export const Dropdown = () => {
    const [ openDropdown, setOpenDropdown ] = useState(true)

    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user
    
    const menuItems = [
        {id: 1, title: "Dashboard", type: "link", clsName: "submenu-item" },
        {id: 2, title: "Sign Out", type: "button", clsName: "submenu-item" }
    ]
    
    return (
        <div>
            <ul className={openDropdown ? "user-submenu-clicked" : "user-submenu"} onClick={() => {setOpenDropdown(!openDropdown)}}>
                {
                menuItems.map((item) => {
                    return (
                        <li key={item.id} onClick={() => {setOpenDropdown(false)}}>
                            {item.type === "link" ? <Link to="/dashboard" className={item.clsName}  >{item.title}</Link> : <p onClick={() => {setUser({name: "", email: ""})
                        }} className={item.clsName} >{item.title}</p> }
                        </li>
                    )
                    })
                }
            </ul>
        </div>

    )
}