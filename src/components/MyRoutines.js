import React, { useEffect, useState } from 'react';
import axios from 'axios'

const MyRoutines = () => {
    const [username, setUserName] = useState('')
    const [myRoutines, setMyRoutines] = useState([])

    useEffect (() => {
        setUserName(localStorage.username)
    }, [])

    // console.log(username)
    // let url = 'http://fitnesstrac-kr.herokuapp.com/api/users/' + {username} + '/routines'
    // console.log(url)

    async function getMyRoutines ()  { 
        let {data} = await axios.get('http://fitnesstrac-kr.herokuapp.com/api/users/' + {username} + '/routines' )
        return data;
    }

   

    useEffect (() => {
        async function getallMyRoutines () {
            let data = await getMyRoutines ()
            setMyRoutines(data)
        }
        getallMyRoutines ()
    }, [])

    console.log(myRoutines)
    
    if (myRoutines.length){
        return (
            <div id="myroutines">
                <h3>My Public Routines</h3> 
                {
                    myRoutines.map((routine) => {
                   return (
                       <div key={routine.id}>
                            <h3>{routine.name}</h3>
                            <>Goal: {routine.goal}</>
                            <p>By: {routine.creatorName}</p>
                            <h5>Activites</h5>
                               {
                                routine.activities.map((a,i) => {
                                   return ( <div id='routineActivities' key={i}>
                                    <p>{a.name}</p>
                                    <ul>
                                        <li>{a.description}</li>
                                        <li>Duration: {a.duration}</li>
                                        <li>Count: {a.count}</li>
                                    </ul>
                                   


                                  </div>
                                  )
                                })
                                                                    
                                }
                               
                            
                       </div>
                   )
               })
                }
            </div>
        )
    } else {
        return (<></>)
    }
}

export default MyRoutines;
