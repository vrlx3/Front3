import React from "react";
import style from "./navbar.css";
import { Link } from "react-router-dom";
import MyNav from "./MyNav";

function Navbar(props) {
  const { isLoggedIn } = props;

  return (
    <div id="navmaster">
      <div id="navbar">
        <Link to="/" id="nav_home">
          Home
        </Link>
        <Link to="/routines" id="nav_routines">
          Routines
        </Link>{" "}
        {isLoggedIn ? <Link to="/myroutines">My Routines</Link> : <></>}
        <Link to="/activities" id="nav_activities">
          Activites
        </Link>{" "}
        {/* {isLoggedIn ? <Link to="/myactivities">My Activites</Link> : <></>} */}
      </div>
    </div>
  );
}

export default Navbar;
