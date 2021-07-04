import { retry } from "async";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Register from "./Register/Register";
import style from "./header.css";

function Header(props) {
  const { isLoggedIn, setIsLoggedIn, id, setId } = props;

  console.log(isLoggedIn);

  return (
    <>
      {" "}
      <div id="header">
        <div id="welcome">Welcome to Fitness Tracker</div>
        <Register
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          id={id}
          setId={setId}
        />
      </div>
      <Navbar isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Header;
