import {useContext, useEffect, useState } from "react"
import { curators } from "../assets/curatorData"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export const Register = () => {
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    const [ formInput, setFormInput ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [ msg, setMsg ] = useState('')
    
    const handleChange = (e) => {
        
        const { name, value } = e.target
        
        setFormInput((prev) => {
           return {...prev,
            [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userEmail = curators.find((user) => {
            return user.email === formInput.email
        })    

        if (!userEmail) {
            const {firstName, lastName, email:newEmail , password} = formInput
            
            curators.push({firstName, lastName, newEmail, password})
            
            setUser({name: firstName, email: newEmail})
        }
        else if (userEmail) {
            setMsg("Email already exists")
        }

        setFormInput((prev) => {
            return {...prev,
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
         })
    }

    return (
        <section>
            <form onSubmit={handleSubmit} >
                <div>
                <div>
                    <label>
                        First Name
                        <input name="firstName" required onChange={handleChange} value={formInput.firstName} />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name
                        <input name="lastName" required onChange={handleChange} value={formInput.lastName} />
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <input name="email" required onChange={handleChange} value={formInput.email} />
                    </label>              
                </div>
                <div>
                    <label>
                        Password
                        <input name="password" required onChange={handleChange} value={formInput.password} />
                    </label>
                </div>
                <div>
                    <button type="submit" aria-label="button for submitting registration form" > Sign Up </button>       
                </div>
                </div>
            </form>
            {msg && <p> {msg} </p>}
        </section>
    )
}