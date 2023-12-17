import React from 'react'
import './errorPage.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section id='error'>
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to={'/'} style={{textDecoration:"none"}}>
        <div className="errorBtn">
            <button>Back to home page</button>
        </div>
        </Link>
    </section>
  )
}

export default Error