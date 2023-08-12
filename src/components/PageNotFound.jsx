import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to={'/'} >Go back</Link>
    </div>
  )
}
