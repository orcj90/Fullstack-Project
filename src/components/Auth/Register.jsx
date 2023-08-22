import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {


    const {register, error} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [data, setData] = useState(null)
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()

    const handleRegister = () => {
        const userValues= {
            firstName,
            lastName,
            password,
            confirmPassword,
            email
        }

        register(userValues).then((data) => {
            setData(data)
            navigate('/login')
        })
    }


    return (
        <div className='has-text-centered container' >
            <h1>Register</h1>
            {
                error &&  <div className="notification is-danger is-light">
                    <button onClick={() => setOpen(false)}  className="delete"></button>
                    {error}
                    </div>
            }

            {
                open && data?.success && data?.message &&   <div className="notification is-success is-light">
                    <button onClick={() => setOpen(false)} className="delete"></button>
                    {data.message}
                    </div>
            }
           
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className="input" type="text" placeholder="First Name" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName}  className="input" type="text" placeholder="Last Name" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input onChange={(e) => setEmail(e.target.value)} value={email}  className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input onChange={(e) => setPassword(e.target.value)} value={password}  className="input" type="password" placeholder="Password" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}  className="input" type="password" placeholder="Confirm Password" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <button onClick={handleRegister} className="button is-link">Register</button>
        </div>
    )
}
