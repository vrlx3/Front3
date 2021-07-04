import React from "react";

let auth = "Bearer " + localStorage.token;

function DeleteActivity(props) {
  const { routineActivityId } = props;
  async function handleDelete(e) {
    e.preventDefault();
    const response = fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);

    console.log("del activity", response);
  }
  return (
    <div id="deleteActivity">
      <button
        onClick={(e) => {
          handleDelete(e);
        }}
      >
        Delete Activity
      </button>
    </div>
  );
}

export default DeleteActivity;
