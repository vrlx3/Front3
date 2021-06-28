import axios from 'axios'
import React, {useState, useEffect} from 'react'


async function getActivities ()  { 
    let {data} = await axios.get('http://fitnesstrac-kr.herokuapp.com/api/activities')
    return data;
}

const Activities = () => {
    const [activities, setActivities] = useState([])

   
    useEffect(() => {
    async function getAllActivities () {
        let data = await getActivities ()
        setActivities(data)
    }
    getAllActivities ()
  
    }, [])
    console.log(activities)
    
    return(
        <div id='activities'>
            {   

                activities.map((act, idx) => {
                return (
                    <div key={act.id}>
                        <h3>Name: {act.name}</h3>
                        <p>Description: {act.description}</p>
                    </div>
                )

            })}
        </div>
    )

    
    

}

export default Activities;
