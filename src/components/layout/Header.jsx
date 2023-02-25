import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{width: '100%'}}>
            <h1>Header</h1>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/signin" >SignIn</Link>
                <Link to="/signuo" >SignUp</Link>
            </div>
        </div>
    )
}

export default Header