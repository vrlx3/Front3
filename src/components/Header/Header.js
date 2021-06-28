import { retry } from 'async';
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar/Navbar'
import Register from './Register/Register'
import style from './header.css'

function Header () {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.token)
    console.log(isLoggedIn)

    useEffect(()=> {
        setIsLoggedIn(!!localStorage.token)
    }, [!!localStorage.token])

    return (
       <> <div id='header'>
            <div id='welcome'>Welcome to Fitness Tracker</div>
            <Register/> 

            
            

        </div>
        <Navbar/>
        

        </>
    )
}

export default Header;
