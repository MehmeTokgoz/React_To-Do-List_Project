import React from "react";
import { useState } from "react";
import SignUpController from "./signupPage";
import LoginController from "./loginPage";
import Background_todo from "./Background_todo.png";

function HomePage() {
  let [switchPage, setSwitchPage] = useState("");
  if (switchPage == "Login") {
    return <LoginController />;
  } else if (switchPage == "Signup") {
    return <SignUpController />;
  }
  return (
    <div className="home-container">
      <div className="paragraf-container">
        <p> This is the home page, please login or register to go to the to-do list</p>
      </div>
      <img className="todo-background" src={Background_todo} />
      <button
        type="button"
        className="btn btn-primary edit-button login-button"
        onClick={() => setSwitchPage("Login")}
      >
        LOGIN
      </button>
      <button
        type="button"
        className="btn btn-primary edit-button signup-button"
        onClick={() => setSwitchPage("Signup")}
      >
        REGISTER
      </button>
    </div>
  );
}

export default HomePage;
