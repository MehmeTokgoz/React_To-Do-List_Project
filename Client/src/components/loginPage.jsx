import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginController() {
  const [inusername, setinusername] = useState(" ");
  const [inpassword, setinpassword] = useState(" ");
  const navigate = useNavigate("");

  function login() {
    axios
      .post("http://localhost:3003/user/login", {
        username: inusername,
        password: inpassword,
      })
      .then(({ data }) => {
        console.log(data)
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/todolist");
        } else {
          alert(data.message);
        }
        console.log(data);
      });
  }

  return (
    <div>
      <div className="userform-container">
        <form className="userform">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setinusername(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else. You don't have an
              account ? <a href="signup"> Sign Up </a>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              onChange={(e) => {
                setinpassword(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginController;
