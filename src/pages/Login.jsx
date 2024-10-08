import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { curators } from "../assets/data/curatorData"
import "../assets/css/form.css"

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
            return user.email === loginInput.email
        })

        if (!userDetails) {
            setMsg("Email does not exist")

            setloginInput({ email: '', password: ''})
        }
        else if (userDetails.password === loginInput.password) {
            setUser({name: userDetails.firstName, email: userDetails.email})

            setloginInput({ email: '', password: ''})
        }
        else if (userDetails.password !== loginInput.password) {
            setMsg('Incorrect password')
        }
        
    }

    return (
        <div className="container"  >
            {userEmail && <Navigate to="/dashboard" /> }
            <section className="form-and-link" id="login-form">
                <h2>Sign In:</h2>
                <form onSubmit={handleSubmit} className="form-section" >
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
                        <div className="failed-text">
                            {msg && <p> {msg} </p>}
                        </div>
                        <div className="clickables" >
                            {!userEmail && <div> 
                                <button type="submit" aria-label="button for submitting login form" >Sign In</button> 
                                </div>}
                            <div>
                                {!userEmail && <Link id="login-a-tag" to="/">Sign Up</Link>}
                            </div>
                        </div>
                </form>
            </section>
        </div>
    )
} 