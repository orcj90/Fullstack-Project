import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Login() {

    const {login,error, setError } = useContext(AuthContext);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState(null)
    const navigate = useNavigate()


    const handleLogin  = () => {
        login(email,password).then(() => {
            navigate('/')
        }).catch((err) => {
            setError(err.message)
        })
    }


    return (
        <div className='has-text-centered container' >
            <h1>Login</h1>
            {
                error &&  <div className="notification is-danger is-light">
                    <button  className="delete"></button>
                    {error}
                    </div>
            }
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input  onChange={(e) => setPassword(e.target.value)} value={password} className="input" type="password" placeholder="Password" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div>
            if you don't have an account yet please <Link to={'/register'}>register for account</Link>
            </div>
            <button onClick={handleLogin} className="button is-link">Login</button>
        </div>
    )
}
