import React, {useState, useEffect} from 'react'
import style from './register.css'
import RegForm from './Token/Token';

function Register (props) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.token)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    async function login () {
        const login = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
                            method: "POST",
                            headers: {
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                            username,
                            password
                            })
                           }).then(response => response.json())
                            .then(result => {
                            return (result);
                            })
                            .catch(console.error);

                            console.log(login)

                         

                            if (login.message == 'Username or password is incorrect'){
                                return alert('Wrong Password')
                            }

                       
                        
                        localStorage.setItem("token", login.token)
                        localStorage.setItem("username", login.user.username)
                        setIsLoggedIn(true)
                        setUsername('')
                        setPassword('')
                        
                        
    }

    async function register () {

        if (!username && !password) {
           return alert('Please enter valid username and password!')
        }

         const user = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                            username,
                            password
                            })
                            }).then(response => response.json())
                            .then(result => {
                                return result;
                            })
                            .catch(console.error);

                            console.log(user)

                            if (user.message == 'A user by that username already exists') {
                               return login()
                                
                            }

                            localStorage.setItem("token", user.token)
                            localStorage.setItem("username", user.user.username)

                           setUsername('')
                            setPassword('')
            
            

    }



    function logout () {
        setIsLoggedIn(false)
        localStorage.setItem("token", '')
        localStorage.setItem("username", '')
    }

    if (!isLoggedIn) {
        return <div id ='register'> 
                <div id='reg_from'>
        <div>
            <input type='text'   onChange={ (e) => {setUsername(e.target.value)}} username={username} placeholder='User ID' value={username}></input>
            <input type='text'  onChange={(e) => {setPassword(e.target.value)}} password={password} placeholder='Password' value={password}></input>
            <button id="register_button" onClick={register}>Register / Login</button>
        </div>

    </div>
                </div>
    } else {  return (
                <div id='logout'>
                  <button onClick={logout}>Log Out</button>
                </div>
    )

    }

   
    
}

export default Register;
