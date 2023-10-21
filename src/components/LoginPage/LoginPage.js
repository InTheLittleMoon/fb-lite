import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage({ loginHandler }) {
  const [userLoginInput, setUserLoginInput] = useState("");

  const loginClickHandler = () => {
    if (userLoginInput === "") {
      console.log("Please enter a username first.");
      return;
    }

    loginHandler(userLoginInput);
    setUserLoginInput("");
  };

  return (
    <div className="sign-in-container">
      <input
        placeholder="Username"
        value={userLoginInput}
        onChange={(event) => setUserLoginInput(event.target.value)}
      />
      <button className="loginButton" onClick={() => loginClickHandler()}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
