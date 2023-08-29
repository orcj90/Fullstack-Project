import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="btm">
                        <p>Fullstack Project CellPhone store
                            All Rights Reseive to CellPhone store ©
                        </p>
                        <a className="nav-link" aria-current="page" href="www.facebook.com"><i className="fa-brands fa-facebook fa-sm"></i></a>
                        <a className="nav-link" aria-current="page" href="www.instagram.com"><i className="fa-brands fa-instagram fa-sm"></i></a>
                        <a className="nav-link" aria-current="page" href="www.linkedin.com"><i className="fa-brands fa-linkedin fa-sm"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}