import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Unlike the registration page, the log in pag only requires a username and password.
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  //If the password is considered invalid, an error message will pop up.
  const handleLogin = (e) => {
    e.preventDefault();
    if (!strongPasswordRegex.test(password)) {
      alert("Invalid password");
      return;
    }
    dispatch(login({ username: username }));
    alert(`Welcome ${username}`);
  };
  //The user will be able to see in what spaces he/she is supposed to insert the appropriate details.
  return (
    <form onSubmit={handleLogin}>
      <Form.Control
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "15px", marginTop: "15px" }}
        required
      />
      <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "15px" }}
        required
      />
      <Button variant="primary" type="submit">
        Login
      </Button>
    </form>
  );
};
//Once the user has clicked the Login button, the pages will display the welcome message in the header, and option to log out will become available.
export default Login;
