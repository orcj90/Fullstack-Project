import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Phone Shop Fullstack Project</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className='navbar-item nav-link active' to={'/'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='navbar-item nav-link active' to={'/product'}>products</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='navbar-item nav-link active' to={'/about'}> About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='navbar-item nav-link active' to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="collapse navbar-collapse">
                        <ul class="nav justify-content-center">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav justify-content-end">
                            <li class="nav-item">
                                <Link className='navbar-item nav-link active' to={'/signin'}>
                                    <i class="fa-solid fa-right-to-bracket fa-sm"></i>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className='navbar-item nav-link active' to={'/signup'}> Sign Up</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='navbar-item nav-link active' to={'/basket'}>
                                    <i class="fa-solid fa-cart-shopping fa-sm"></i>
                                    <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}