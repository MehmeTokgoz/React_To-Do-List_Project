import React from "react";
import { useState } from "react";
import SignUpController from "./signupPage";
import LoginController from "./loginPage";

function HomePage() {
  let [switchPage, setSwitchPage] = useState("");
  if (switchPage == "Login") {
    return <LoginController />;
  } else if (switchPage == "Signup") {
    return <SignUpController />;
  }
  return (
    <div>
      <h1> This is Home Page</h1>
      <button
        type="button"
        className="btn btn-primary edit-button"
        onClick={() => setSwitchPage("Login")}
      >
        Login
      </button>
      <button
        type="button"
        className="btn btn-primary edit-button"
        onClick={() => setSwitchPage("Signup")}
      >
        Sign Up
      </button>
    </div>
  );
}

export default HomePage;
