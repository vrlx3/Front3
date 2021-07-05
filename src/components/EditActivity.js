import React from "react";

function EditActivity2(props) {
  const { count, duration, routineActivityId, setCount, setDuration } = props;
  async function updateActivity() {
    console.log(count, duration, routineActivityId);
    console.log(`Bearer ${localStorage.getItem("token")}`);
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${routineActivityId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "PATCH",
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);

    console.log(response);
  }

  return (
    <div>
      Duration -{" "}
      <input
        type="number"
        min="0"
        max="100"
        value={duration}
        onChange={(e) => {
          setDuration(e.target.value);
        }}
      />{" "}
      Count -{" "}
      <input
        type="number"
        min="0"
        max="100"
        value={count}
        onChange={(event) => {
          setCount(event.target.value);
        }}
      />
      <button
        onClick={(e) => {
          updateActivity(e);
        }}
      >
        Update Activity
      </button>
    </div>
  );
}

export default EditActivity2;
