import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewRoutine = function () {
  const [name, setName] = useState("");
  // console.log('name')
  const [goal, setGoal] = useState("");
  // console.log('goal')
  const [isPublic, setIsPublic] = useState(false);

  let auth = "Bearer " + localStorage.token;
  // console.log(auth)

  async function createRoutine() {
    console.log("create routine with..", name, goal, auth);

    const newR = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic: true,
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
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        name={name}
        placeholder="Name a New Routine"
        value={name}
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setGoal(e.target.value);
        }}
        goal={goal}
        placeholder="Set your Goal"
        value={goal}
      ></input>
      <button
        id="newRoutineButton"
        onClick={(e) => {
          createRoutine();
        }}
      >
        Create{" "}
      </button>
    </div>
  );
};

export default NewRoutine;
