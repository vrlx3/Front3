import axios from "axios";
import React, { useState, useEffect } from "react";
import MyRoutines from "./MyRoutines";
import NewRoutine from "./NewRoutine";

async function getRoutines() {
  const { data } = await axios.get(
    "http://fitnesstrac-kr.herokuapp.com/api/routines"
  );
  return data;
}

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function getAllRoutines() {
      let data = await getRoutines();
      setRoutines(data);
    }
    getAllRoutines();
  }, []);

  console.log(routines);

  return (
    <div id="masterRoutines">
      <div id="allroutines">
        <h3>All Routines</h3>
        {routines
          .slice(0)
          .reverse()
          .map((routine) => {
            return (
              <div key={routine.id}>
                <h3>{routine.name}</h3>
                <>Goal: {routine.goal}</>
                <p>By: {routine.creatorName}</p>
                <h5>Activites</h5>
                {routine.activities.map((a, i) => {
                  return (
                    <div id="routineActivities" key={i}>
                      <p>{a.name}</p>
                      <ul>
                        <li>{a.description}</li>
                        <li>Duration: {a.duration}</li>
                        <li>Count: {a.count}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Routines;
