import React, { useState } from "react";
import "./register.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Password does not match");
      return;
    }

    const user = {
      fullName,
      username,
      email,
      profilePicture,
      password,
      passwordConfirm,
      bio,
    };

    if (profilePicture) {
      const data = new FormData();
      const filename = Date.now() + profilePicture.name;
      data.append("name", filename);
      data.append("file", profilePicture);
      user.profilePicture = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {
        toast.error("Upload Error");
      }
    }

    try {
      const res = await axios.post("http://localhost:5000/auth/register", user);
      if (res.status === 200) {
        toast.success("Registration Success");
        navigate("/login");
      }
    } catch (error) {
      toast.warning("Registration Error" + error.message);
    }
  };

  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-input">
          <TextField
            required
            type="text"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="text"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="password"
            id="outlined-basic"
            label="Password Confirm"
            variant="outlined"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className="form-input">
          <TextField
            required
            type="file"
            variant="outlined"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>

        <div className="form-input">
          <TextField
            required
            type="text"
            id="outlined-basic"
            label="Bio"
            variant="outlined"
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <Link to="/login">Already have an account? Login</Link>

        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
