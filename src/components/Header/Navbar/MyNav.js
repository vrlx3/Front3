import React, {useState, useEffect} from 'react';
import style from './navbar.css'
import {Link}from 'react-router-dom'

function MyNav () {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userid, setUserid] = useState('')

    console.log(isLoggedIn)

    useEffect(()=> {
        setIsLoggedIn(!!localStorage.token)
    }, localStorage.token)

    



    if(isLoggedIn) {
        return ( <div id='mynavbar'>
            <Link to='/myroutines'>My Routines</Link>
            <Link to='/myactivities'>My Activites</Link>
            </div>
        )
        } else {
            return (<div></div>)
    }
}

export default MyNav;