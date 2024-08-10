import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Contact</Link>
    </>
  );
};

const Login = () => {
  // const navigate = useNavigate();
  // const [auth, setAuth] = useState("admin");

  // const [show, setShow] = useState(false);
  // useEffect(() => {
  // if (!auth) {
  //   navigate("/");
  // }
  // auth === false ? navigate("/"): null
  // }, [auth, navigate]);

  return (
    <>
      {/* <Link to="/">Home</Link>
      {auth !== "user" ? <Link to="/about">About</Link> : null}
      <Link to="/login">Login</Link> */}

      {/* <button id="btn" onClick={()=> setShow(!show)}>
        Button
      </button> */}
      {/* Normal Syntax For Condition */}
      {/* {show ? <input type="text" /> : null} */}

      {/* Best Syntax For Condition */}
      {/* {show && <input type="text" />} */}
    </>
  );
};

const About = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
