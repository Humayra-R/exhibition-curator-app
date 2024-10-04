import {useContext, useState } from "react"
import { Link } from "react-router-dom"
import { curators } from "../assets/data/curatorData"
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
        <section className="reg-form">
                <form onSubmit={handleSubmit}  >
                    <div>
                        <div>
                            <label htmlFor="firstName" >First Name</label> 
                        </div>
                        <div>
                            <input name="firstName" required onChange={handleChange} value={formInput.firstName} />  
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="lastName" >Last Name</label>
                        </div>
                        <div>
                            <input name="lastName" required onChange={handleChange} value={formInput.lastName} />
                        </div>
                    </div>
                    <div>
                        <div>
                           <label htmlFor="email" >Email</label> 
                        </div>
                        <div>
                            <input name="email" required onChange={handleChange} value={formInput.email} />
                        </div>            
                    </div>
                    <div>
                        <div>
                            <label htmlFor="password" >Password</label>
                        </div>
                        <div>
                            <input name="password" required onChange={handleChange} value={formInput.password} />
                        </div> 
                    </div>
                    <div className="reg-failed-text">
                    {msg && <p> {msg} </p>}
                    </div>
                    <div className="clickables">
                        <div>
                            <button type="submit" aria-label="button for submitting registration form" >Sign Up</button>       
                        </div>
                        <div>
                            {!email && <Link to="login" >Sign In</Link>}
                        </div>
                    </div>
                </form>
        </section>
    )
}