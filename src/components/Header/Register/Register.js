import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./register.css";
import RegForm from "./Token/Token";

function Register(props) {
  const { isLoggedIn, setIsLoggedIn, id, setId } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const login = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch(console.error);

    console.log(login);

    if (login.message == "Username or password is incorrect") {
      return alert("Wrong Password");
    }

    localStorage.setItem("token", login.token);
    localStorage.setItem("username", login.user.username);
    setIsLoggedIn(true);
    setId(username);
    setUsername("");
    setPassword("");
  }

  async function register() {
    if (!username || !password) {
      return alert("Please enter valid username and password!");
      console.log("I shouldnt be there");
    }

    // try {
    //   console.log(username, password);
    //   const response = await axios.post(
    //     "http://fitnesstrac-kr.herokuapp.com/api/users/register",
    //     {
    //       user: { username, password },
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }

    const user = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch(console.error);

    console.log(user);

    if (user.error) {
      login();
    } else {
      localStorage.setItem("token", user.token);
      localStorage.setItem("username", user.user.username);

      setId(username);
      setUsername("");
      setPassword("");
      setIsLoggedIn(true);
    }
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.setItem("token", "");
    localStorage.setItem("username", "");
  }

  if (!isLoggedIn) {
    return (
      <div id="register">
        {" "}
        <div id="reg_from">
          <div>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              username={username}
              placeholder="User ID"
              value={username}
            ></input>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              password={password}
              placeholder="Password"
              value={password}
            ></input>
            <button
              id="register_button"
              onClick={(e) => {
                register();
              }}
            >
              Register / Login
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="logout">
        <>Hi, {id} </>
        <button
          onClick={(e) => {
            logout();
          }}
        >
          Log Out
        </button>
      </div>
    );
  }
}

export default Register;
