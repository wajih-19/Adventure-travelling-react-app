import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <div>
    {isRegistered ? (
      <div className="loginForm">
        <i className="fa-solid fa-circle-check fa-2xl" style={{ color: '#3977db' }}></i>
        <h2>You Registered Successfully</h2>
        <p>You have successfully registered your account. Please use your identification to login.</p>
        <Link to='/'><input className="startedBox" type="button" value="Get Started" /></Link>
      </div>
    ) : (
      <form id="signupForm">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="name"><b>Name</b></label>
        <input type="text" placeholder="Enter Your Name" name="name" required /><br />

        <label htmlFor="number"><b>Contact No.</b></label>
        <input type="text" placeholder="Enter Your Contact No." name="number" required /><br />

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Your E-mail" name="email" required /><br />

        <label htmlFor="pwd"><b>Password</b></label>
        <input type="password" placeholder="Enter Your Password" name="psw" required /><br />

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Your Password" name="psw-repeat" required /><br />
        <hr />
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

        <button type="submit" id="registerbutton" className="registerbutton" onClick={handleRegister}>Register</button>

        <Link to='/signin'><p>Already have an account?</p></Link>
      </form>
    )}
  </div>
  )
}

export default SignUp