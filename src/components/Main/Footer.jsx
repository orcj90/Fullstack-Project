import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div class="container-fluid">
                <div class="btm">
                    <p>Fullstack Project CellPhone store
                        All Rights Reseive to CellPhone store ©
                    </p>
                    <a class="nav-link" aria-current="page" href="www.facebook.com"><i class="fa-brands fa-facebook fa-sm"></i></a>
                    <a class="nav-link" aria-current="page" href="www.instagram.com"><i class="fa-brands fa-instagram fa-sm"></i></a>
                    <a class="nav-link" aria-current="page" href="www.linkedin.com"><i class="fa-brands fa-linkedin fa-sm"></i></a>
                </div>
            </div>
        </>
    )
}