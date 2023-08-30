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
        <div className="container-fluid text-center" >
            <h1>Login</h1>
            {
                error &&  <div className="notification is-danger is-light">
                    <button  className="delete"></button>
                    {error}
                    </div>
            }
            <div className="container-fluid text-center">
                <p className="text-center">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="input" type="email" placeholder="Email" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div className="container-fluid text-center">
                <p className="text-center">
                    <input  onChange={(e) => setPassword(e.target.value)} value={password} className="input" type="password" placeholder="Password" />
                    <span className="text-center">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div>
            create account <Link to={'/register'}>register</Link>
            </div>
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    )
}
