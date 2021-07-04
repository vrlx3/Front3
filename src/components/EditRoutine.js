import React, { useState, useEffect } from "react";
import axios from "axios";

async function getActivities() {
  let { data } = await axios.get(
    "http://fitnesstrac-kr.herokuapp.com/api/activities"
  );
  return data;
}

const EditRoutine = function (props) {
  const { editRoutineId, rName } = props;

  const [name, setName] = useState("");
  // console.log('name')
  const [goal, setGoal] = useState("");
  // console.log('goal')
  const [isPublic, setIsPublic] = useState(false);

  const [activities, setActivities] = useState([]);

  const [activityId, setActivityId] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");

  console.log(activityId);

  useEffect(() => {
    async function getAllActivities() {
      let data = await getActivities();
      setActivities(data);
    }
    getAllActivities();
  }, []);

  let auth = "Bearer " + localStorage.token;
  // console.log(auth)

  async function updateRoutine() {
    console.log("create routine with..", name, goal, auth);

    const newR = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${editRoutineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify({
          activityId,
          count,
          duration,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch(console.error);

    console.log(newR);

    return newR;
  }

  return (
    <div id="newRoutine">
      {" "}
      <h5>Routine Name</h5>{" "}
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        name={name}
        placeholder="Edit Routine"
        value={name}
      ></input>{" "}
      <h5>Goal</h5>
      <input
        type="text"
        onChange={(e) => {
          setGoal(e.target.value);
        }}
        goal={goal}
        placeholder="Edit Goal"
        value={goal}
      ></input>
      <h5>Activity</h5>
      <select
        id="activities"
        onChange={(e) => {
          setActivityId(e.target.value);
        }}
      >
        {activities.map((activity) => {
          return (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          );
        })}
      </select>{" "}
      <h5>Activity Duration</h5>
      <input
        type="number"
        min="0"
        max="100"
        onChange={(e) => {
          setDuration(e.target.value);
        }}
      />
      <h5>Count</h5>
      <input
        type="number"
        min="0"
        max="100"
        onChange={(event) => {
          setCount(event.target.value);
        }}
      />{" "}
      <p></p>
      <button
        id="newRoutineButton"
        onClick={(e) => {
          updateRoutine();
        }}
      >
        Update Routine / Add Activity
      </button>
    </div>
  );
};

export default EditRoutine;
