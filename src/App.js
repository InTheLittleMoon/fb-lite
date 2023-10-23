import React, { useState } from "react";
import "./App.css";

//default axios
import axiosInstance from "./axiosInstance";

//components
import LoginPage from "./components/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";

function App() {
  //states
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedInStatus, setLoggedInStatus] = useState(true);

  const loginHandler = (userLoginInput) => {
    console.log(userLoginInput);
    const user = userLoginInput;

    axiosInstance
      .post("/login", {
        username: user,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          setCurrentUser(response.data);
          console.log(response.data);
          setLoggedInStatus(true);
        } else {
          console.log("Login failed. Please check your credentials.");
        }
      })
      .catch(function (error) {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="App">
      {!loggedInStatus && <LoginPage loginHandler={loginHandler} />}
      {loggedInStatus && <MainPage currentUser={currentUser} />}
    </div>
  );
}

export default App;
