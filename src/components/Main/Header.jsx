import React, { useContext, useState } from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import Find from './Sidebar/Find/Find';
import { AuthContext } from '../../context/AuthContext';
export default function Header() {


    const { logout, error, setError } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/')
            }).catch((err) => {
                setError(err.message)
            })
    }
    const { user } = useContext(AuthContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Phone Shop Fullstack Project</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className='navbar-item nav-link active' to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navbar-item nav-link active' to={'/product'}>products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navbar-item nav-link active' to={'/about'}> About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navbar-item nav-link active' to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav justify-content-center">
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            {/* <Find /> */}
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav justify-content-end">
                            {( user ) ?
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav justify-content-end">
                                        <li className="nav-item">
                                            <Link className='navbar-item nav-link active' to={'/basket'}>
                                                <i className="fa-solid fa-cart-shopping fa-sm"></i>
                                                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <div className='navbar-end'>
                                                <span className='navbar-item'>
                                                    Welcome, {`${user?.firstName} ${user?.lastName}`}
                                                </span>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='navbar-item nav-link active' onClick={handleLogout} to={'/'}>
                                                {/* <i className="fa-solid fa-right-to-bracket fa-sm"></i> */}
                                                logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                :
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav justify-content-end">
                                        <li className="nav-item">
                                            <Link className='navbar-item nav-link active' to={'/login'}>
                                                {/* <i className="fa-solid fa-right-to-bracket fa-sm"></i> */}
                                                login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='navbar-item nav-link active' to={'/register'}> Sign Up</Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </ul>
                    </div>
                </div>

            </nav>
            <Outlet />
        </>
    )
}