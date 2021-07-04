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
} from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
  const [editRoutineId, setEditRoutineId] = useState("");

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
            />
          )}
        />{" "}
        <Route path="/activities" component={Actvities} />
        <Route path="/myactivities" />
        <Route
          path="/editroutine"
          render={(props) => (
            <EditRoutine
              {...props}
              isLoggedIn={isLoggedIn}
              id={id}
              editRoutineId={editRoutineId}
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
