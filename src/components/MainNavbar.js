import React from 'react'
import { Link } from 'react-router-dom'

// styles 
import './MainNavbar.css'

export default function MainNavbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <nav className='nav'>
                    <Link to='/' className='brand'>
                        <h1>Cooking</h1>
                    </Link>
                    <Link to='/create' className='create'>
                        Create Recipe
                    </Link>
                </nav>
            </div>

        </div>
    )
}


