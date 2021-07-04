// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function RegForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   async function login() {
//     const login = await fetch(
//       "http://fitnesstrac-kr.herokuapp.com/api/users/login",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       }
//     )
//       .then((response) => response.json())
//       .then((result) => {
//         return result;
//       })
//       .catch(console.error);

//     console.log(login);

//     if (login.message == "Username or password is incorrect") {
//       return alert("Wrong Password");
//     }

//     localStorage.setItem("token", login.token);
//     localStorage.setItem("username", login.user.username);

//     setUsername("");
//     setPassword("");
//   }

//   async function register() {
//     if (!username || !password) {
//       return alert("Please enter valid username and password!");
//     } else {
//       const user = await fetch(
//         "http://fitnesstrac-kr.herokuapp.com/api/users/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username,
//             password,
//           }),
//         }
//       )
//         .then((response) => response.json())
//         .then((result) => {
//           return result;
//         })
//         .catch(console.error);

//       console.log(user);

//       if (user.message == "A user by that username already exists") {
//         return login();
//       }

//       localStorage.setItem("token", user.token);
//       localStorage.setItem("username", user.user.username);

//       setUsername("");
//       setPassword("");
//     }
//   }

//   return (
//     <div id="reg_from">
//       <div>
//         <input
//           type="text"
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//           username={username}
//           placeholder="User ID"
//           value={username}
//         ></input>
//         <input
//           type="text"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           password={password}
//           placeholder="Password"
//           value={password}
//         ></input>
//         <button id="register_button" onClick={register}>
//           Register / Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default RegForm;
