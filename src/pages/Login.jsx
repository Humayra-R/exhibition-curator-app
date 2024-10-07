import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { curators } from "../assets/data/curatorData"
import "../assets/css/login.css"

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
        <div className="container">
            {userEmail && <Navigate to="/dashboard" /> }
            <section className="login-form">
                <h2>Sign In:</h2>
                <form onSubmit={handleSubmit} >
                    {!userEmail && 
                        <>
                            <div>
                                <label htmlFor="email" >Email</label>
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    onChange={handleChange}
                                    value={loginInput.email} 
                                /> 
                            </div>  
                        </>
                    
                        }
                    {!userEmail && 
                        <>
                            <div>
                            <label htmlFor="password" >Password</label>
                            </div>
                            <div>
                                <input 
                                type="password"
                                name="password" 
                                required 
                                onChange={handleChange}
                                value={loginInput.password} 
                            /> </div>
                        </> }
                    {!userEmail && <div>
                        <button type="submit" aria-label="button for submitting login form" >Sign In</button>       
                    </div>}
                </form>
                <div>
                    {msg && <p> {msg} </p>}
                </div>
                <div>
                    {!userEmail && <Link to="/">Sign Up</Link>}
                </div>
            </section>
        </div>
    )
} 