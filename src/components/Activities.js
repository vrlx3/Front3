import axios from "axios";
import React, { useState, useEffect } from "react";

async function getActivities() {
  let { data } = await axios.get(
    "http://fitnesstrac-kr.herokuapp.com/api/activities"
  );
  return data;
}

const Activities = (props) => {
  const { isLoggedIn } = props;
  const [activities, setActivities] = useState([]);

  const [name, setName] = useState("");
  // console.log('name')
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getAllActivities() {
      let data = await getActivities();
      setActivities(data);
    }
    getAllActivities();
  }, []);
  console.log(activities);

  async function handleclick(e) {
    e.preventDefault();
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/activities",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name,
          description,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  }

  return (
    <div id="masterActivity">
      <div id="createActivity">
        {isLoggedIn ? (
          <>
            <input
              type="text"
              value={name}
              placeholder="Enter Activity Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              value={description}
              placeholder="Enter Activity Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                handleclick(e);
              }}
            >
              {" "}
              Add Activity
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      <div id="activities">
        <h3>All Activities</h3>
        {activities.map((act, idx) => {
          return (
            <div key={act.id}>
              <h3>Name: {act.name}</h3>
              <p>Description: {act.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
