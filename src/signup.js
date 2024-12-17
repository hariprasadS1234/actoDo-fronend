import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  const users = props.users; // List of users passed as props
  const setUsers = props.setUsers; // Function to set the users list

  const [uname, setUname] = useState(""); // State for username
  const [pass, setPass] = useState(""); // State for password
  const [cpass, setCpass] = useState(""); // State for confirm password
  const [error, setError] = useState(""); // State for error messages

  const navigate = useNavigate();

  // Handle input changes
  const handleUsername = (e) => {
    setUname(e.target.value);
    setError(""); // Clear errors when user starts typing
  };

  const handlePassword = (e) => {
    setPass(e.target.value);
    setError(""); // Clear errors
  };

  const handleCpassword = (e) => {
    setCpass(e.target.value);
    setError(""); // Clear errors
  };

  const handleAdd = () => {
    // Validation: Check for empty fields
    if (uname.trim() === "" || pass.trim() === "" || cpass.trim() === "") {
      setError("All fields are required!");
      return;
    }

    // Validation: Check if passwords match
    if (pass !== cpass) {
      setError("Passwords do not match!");
      return;
    }

    // Validation: Check if username already exists
    const userExists = users.some((user) =>{  return(user.username === uname)}); //{} ildang arrow use madudag no return reqd
    if (userExists) {
      setError("Username already exists. Please choose a different one.");
      return;
    }

    // Add new user and navigate to Signin
    setUsers([...users, { username: uname, password: pass }]);
    navigate("/");
  };

  return (
    <div className="bg-black p-10 m-3 rounded-xl">
      <div className="bg-white p-10 rounded-xl flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">Hey, Hi... :)</h1>
        <p>I'm here to help you manage your activities. Please Register.</p>

        {error ? (
        <p className="text-red-500">{error}</p> // Render error if exists
      ) : null}
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={handleUsername}
            value={uname}
            className="outline-none border border-black rounded-md p-1"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            value={pass}
            className="outline-none border border-black rounded-md p-1"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleCpassword}
            value={cpass}
            className="outline-none border border-black rounded-md p-1"
          />
        </div>

        <button
          className="p-1 rounded-md w-fit px-2 bg-purple-600 text-white"
          onClick={handleAdd}
        >
          Signup
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/" className="text-purple-600 underline">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
