import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function SignUpController() {

    const [upusername, setupusername] = useState("");
    const [uppassword, setuppassword] = useState("");
    const [upmail, setupmail] = useState("");
    const navigate = useNavigate("")
  
    function signup() {
      axios
        .post("http://localhost:3003/user/signup", {
          username: upusername,
          password: uppassword,
          email: upmail,
        })
        .then(({ data }) => {
          if(data.message=== "User created and saved") {
            navigate("/login")
          }
         console.log({data})
        });
    }
  
    return (
      <div className="userform-container">
        <form className="userform">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail3"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setupusername(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword4"
              onChange={(e) => {
                setuppassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail5" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail5"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setupmail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else. You already have an
              account ? <a href="loginPage.js"> Login </a>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              signup();
            }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
  export default SignUpController;