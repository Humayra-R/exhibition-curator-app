import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom"
import { Header } from "./Header"
import { UserContext } from "../context/UserContext";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { green, yellow } from '@mui/material/colors';


export const NavBar = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user
    
    return (
    <div>
        <Header />
        <nav> 
            <ul>
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
                <li>
                    {email && 
                    <NavLink to="dashboard"> 
                        <Stack>
                            <Avatar sx={{ bgcolor: yellow[800], width: 30, height: 30 }} > {name[0].toUpperCase()}
                            </Avatar>
                        </Stack>    
                    </NavLink> }
                </li>
                <li>
                    {!email && <NavLink to="login" >
                        Sign In
                    </NavLink> }
                </li>
                <li>
                    {email && <NavLink to="logout" >
                        Sign Out
                    </NavLink> }
                </li>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main> 
    </div>
    )   
}