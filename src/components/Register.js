import React, { useState } from "react";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//The registration page allows the users to enter their details for the first time, so their credentials are in the system the next time they wish to log in.
const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });
  //The page will start with empty spaces, where the user can enter his/her details
  // The email and password are tested for their validity.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  //If the system believes either of the two components are invalid, a warning message will pop up, warning the user of its invalidity.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(form.email)) {
      alert("Invalid email address");
      return;
    }
    if (!strongPasswordRegex.test(form.password)) {
      alert("Invalid password");
      return;
    }
    dispatch(login({ username: form.username }));
    alert(`Welcome ${form.username}`);
    console.log(form);
    // Implements further validation and user registration.
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //The insertion spaces are all spaced out and have placeholders, which allow the user to identify where they need to insert the information.
  return (
    <form onSubmit={handleSubmit}>
      <Form.Control
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        style={{ marginBottom: "15px", marginTop: "15px" }}
        required
      />
      <Form.Control
        name="surname"
        placeholder="Surname"
        value={form.surname}
        onChange={handleChange}
        style={{ marginBottom: "15px" }}
        required
      />
      <Form.Control
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        style={{ marginBottom: "15px" }}
        required
      />
      <Form.Control
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={{ marginBottom: "15px" }}
        required
      />
      <Form.Control
        name="password"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
        style={{ marginBottom: "15px" }}
        required
      />
      <Button variant="primary" type="submit">
        Register
      </Button>
    </form>
  );
};

export default Register;
