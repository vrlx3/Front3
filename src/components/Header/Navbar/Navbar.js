import React from 'react';
import style from './navbar.css'
import {Link}from 'react-router-dom'
import MyNav from './MyNav';



function Navbar () {
    return (
       <div id='navmaster'>
        
            
        
        <div id="navbar" >
            <Link to='/' id="nav_home">Home</Link>
            <Link to='/routines' id="nav_routines">Routines</Link>
            <Link to='/activities'  id="nav_activities" >Activites</Link>
            <Link to='/extra' id="nav_extra">Extra</Link>
        


    </div>

        <MyNav/>

    </div>)
}

export default Navbar

