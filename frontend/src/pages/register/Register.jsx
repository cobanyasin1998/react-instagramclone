import React from "react";
import "./register.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Register = () => {
  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form">
        <h2>Register</h2>
        <div className="form-input">
          <TextField
            required
            type="text"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="text"
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="password"
            id="outlined-basic"
            label="Password Confirm"
            variant="outlined"
          />
        </div>
        <div className="form-input">
          <TextField required type="file" variant="outlined" />
        </div>

        <div className="form-input">
          <TextField
            required
            type="password"
            id="outlined-basic"
            label="Bio"
            variant="outlined"
          />
        </div>
        <a className="back-login" href="/">
          Back To Login
        </a>
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
