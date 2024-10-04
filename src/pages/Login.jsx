import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { curators } from "../assets/data/curatorData"

export const Login = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name:userName, email:userEmail } = user

    const [ msg, setMsg ] = useState('')

    const [ loginInput, setloginInput ] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setloginInput((prev) => {  
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const userDetails = curators.find((user) => {
            return user.email === loginInput.email && user.password === loginInput.password
        })

        if (!userDetails) {
            setMsg("Email does not exist")
        }

        setUser({name: userDetails.firstName, email: userDetails.email})
        
        setloginInput((prev) => {
            return {...prev, email: '', password: ''}
        })
    }

    return (
        <div>
            {userEmail && <Navigate to="/dashboard" /> }
            <section>
                <form onSubmit={handleSubmit} >
                    {!userEmail && <div>
                        <label>
                            Email
                        <input 
                            type="email" 
                            name="email" 
                            required 
                            onChange={handleChange}
                            value={loginInput.email} 
                        />
                        </label>              
                    </div>}
                    {!userEmail && <div>
                        <label>
                            Password
                            <input 
                                type="password"
                                name="password" 
                                required 
                                onChange={handleChange}
                                value={loginInput.password} 
                            />
                        </label>
                    </div>}
                    {!userEmail && <div>
                        <button type="submit" aria-label="button for submitting login form" > Sign In </button>       
                    </div>}
                </form>
                {msg && <p> {msg} </p>}
                {!userEmail && <Link to="/">Sign Up</Link>}
            </section>
        </div>
    )
} 