import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Actvities,
  Home,
  LoginForm,
  MyRoutines,
  Routines,
  Header,
  Footer,
  EditRoutine,
  EditActivity2,
} from "./components";
import EditActivity from "./components/EditActivity";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
  const [editRoutineId, setEditRoutineId] = useState("");
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [routineActivityId, setRoutineActivityId] = useState("");
  const [rName, setrName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setId(localStorage.getItem("username"));
    }
  }, []);

  return (
    <Router>
      <div>
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          id={id}
          setId={setId}
        />
        <Route exact strict path="/" render={Home} />
        <Route path="/routines" component={Routines} />
        <Route
          path="/myroutines"
          render={(props) => (
            <MyRoutines
              {...props}
              isLoggedIn={isLoggedIn}
              id={id}
              setEditRoutineId={setEditRoutineId}
              setCount={setCount}
              setDuration={setDuration}
              setRoutineActivityId={setRoutineActivityId}
              setrName={setrName}
            />
          )}
        />{" "}
        <Route
          path="/activities"
          render={(props) => <Actvities {...props} isLoggedIn={isLoggedIn} />}
        />
        {/* <Route path="/myactivities" /> */}
        <Route
          path="/addactivity"
          render={(props) => (
            <EditRoutine
              {...props}
              isLoggedIn={isLoggedIn}
              id={id}
              editRoutineId={editRoutineId}
              rName={rName}
            />
          )}
        />
        <Route
          path="/editactivity"
          render={(props) => (
            <EditActivity2
              {...props}
              isLoggedIn={isLoggedIn}
              id={id}
              editRoutineId={editRoutineId}
              count={count}
              duration={duration}
              routineActivityId={routineActivityId}
              setCount={setCount}
              setDuration={setDuration}
              setRoutineActivityId={setRoutineActivityId}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// render={(props) => {
//   <Home {...props} editRoutineId={editRoutineId} />;
// }}
