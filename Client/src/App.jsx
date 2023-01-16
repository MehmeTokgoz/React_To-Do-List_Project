import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/home";
import SignUpController from "./components/signupPage";
import LoginController from "./components/loginPage";
import Todolist from "./components/todolist";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signup" element={<SignUpController />}></Route>
            <Route path="/login" element={<LoginController />}></Route>
            <Route path="/todolist" element={<Todolist />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
