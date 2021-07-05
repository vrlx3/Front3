import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewRoutine from "./NewRoutine";
import DeleteActivity from "./DeleteActivity";

const MyRoutines = (props) => {
  const {
    isLoggedIn,
    id,
    setEditRoutineId,
    setCount,
    setDuration,
    setRoutineActivityId,
    setrName,
  } = props;
  const [username, setUserName] = useState("");
  const [myRoutines, setMyRoutines] = useState([]);
  const [render, setRender] = useState(0);

  async function getMyRoutines() {
    const { data } = await axios.get(
      `http://fitnesstrac-kr.herokuapp.com/api/users/${id}/routines`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);
    return data;
  }

  async function updateActivity() {
    const { data } = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/11",
      {
        method: "PATCH",
        body: JSON.stringify({
          count: 2,
          duration: 30,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  }

  useEffect(() => {
    async function getallMyRoutines() {
      let data = await getMyRoutines();
      setMyRoutines(data);
    }
    getallMyRoutines();
  }, [render]);

  console.log(myRoutines);

  return (
    <div id="masterMyRoutines">
      <NewRoutine />
      <div id="myRoutines">
        {myRoutines ? (
          <>
            <h3 id="test">My Routines</h3>
            {myRoutines
              .slice(0)
              .reverse()
              .map((routine) => {
                return (
                  <div key={routine.id}>
                    {" "}
                    <div id="singleRoutine">
                      <h3>{routine.name}</h3>
                      <>Goal: {routine.goal}</>
                      <p>By: {routine.creatorName}</p>
                      <h5>Activites</h5>
                      {routine.activities.map((a, i) => {
                        return (
                          <>
                            <div id="routineActivities" key={i}>
                              <p>{a.name}</p>
                              <ul>
                                <li>{a.description}</li>
                                <li>Duration: {a.duration}</li>
                                <li>Count: {a.count}</li>
                              </ul>
                            </div>
                            <DeleteActivity
                              routineActivityId={a.routineActivityId}
                              render={render}
                              setRender={setRender}
                            />
                            <Link
                              to="/editactivity"
                              onClick={(e) => {
                                setRoutineActivityId(a.routineActivityId);
                                setCount(a.count);
                                setDuration(a.duration);
                              }}
                            >
                              Edit Activity
                            </Link>
                          </>
                        );
                      })}
                    </div>
                    <Link
                      to="/addactivity"
                      onClick={(e) => {
                        setEditRoutineId(routine.id);
                        setrName(routine.name);
                      }}
                    >
                      Add Activites
                    </Link>
                  </div>
                );
              })}
          </>
        ) : (
          <h3>You have not made any Routines yet.</h3>
        )}
      </div>
    </div>
  );
};

export default MyRoutines;
