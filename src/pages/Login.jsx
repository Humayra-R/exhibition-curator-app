import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { curators } from "../assets/curatorData"

export const Login = () => {
    const [ user, setUser ] = useContext(UserContext)

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
        
        const { firstName, email:userEmail } = curators.find((user) => {
            return user.email === loginInput.email && user.password === loginInput.password
        })
        
        setUser((prev) => {
            return {...prev, name: firstName, email: userEmail}
        })
        
        setloginInput((prev) => {
            return {...prev, email: '', password: ''}
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit} >
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
                    <button type="submit" aria-label="button for submitting login form" > Sign In </button>       
                </div>
            </form>
            <Link to="/">Sign Up</Link>
        </section>
    )
} 