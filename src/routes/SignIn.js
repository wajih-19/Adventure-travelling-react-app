import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn() {
  const [isForm1Visible, setIsForm1Visible] = useState(true);
  const [isForm2Visible, setIsForm2Visible] = useState(false);
  const [isForm3Visible, setIsForm3Visible] = useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleReset = () => {
    setIsForm1Visible(false);
    setIsForm2Visible(true);
    setIsForm3Visible(false);
  };

  const handleCreate = () => {
    setIsForm1Visible(false);
    setIsForm2Visible(false);
    setIsForm3Visible(true);
  };

  const handleLogin = () => {
    setIsForm1Visible(false);
    setIsForm2Visible(false);
    setIsForm3Visible(false);
    setIsLoginFormVisible(true);
  };

  return (
    <div>
      {isForm1Visible && (
        <form id="form1">
          <div className="loginForm">
            <img className="loginImg" src="logo.png" alt="" />
            <p style={{ fontSize: 'larger' }}>USE LOGIN</p>
            <input type="email" size="35" placeholder="Enter Email Address" name="email" id="email" required />
            <input type="password" size="35" placeholder="Password" name="password" id="password" required />
            <input className="loginBtn" id="login" type="button" value="Login" onClick={handleLogin} /><br /><br />
            <a id="reset" onClick={handleReset}>Reset Password?</a>
          </div>
        </form>
      )}

      {isForm2Visible && (
        <form id="form2" >
          <div className="loginForm">
            <p style={{ fontSize: 'larger' }}>Reset Password</p>
            <input type="password" size="35" placeholder="New Password" name="email" id="email" />
            <input type="password" size="35" placeholder="Confirm Password" name="password" id="password" />
            <div>
                <input type="checkbox" className="checkbox" name="checkbox" id="" /><span> Remember login info</span><br />
            </div>
            <input id="create" className="loginBtn" type="button" value="Create" onClick={handleCreate} /><br /><br />
          </div>
        </form>
      )}

      {isForm3Visible && (
        <form id="form3" >
          <div className="loginForm">
            <i className="fa-solid fa-circle-check fa-2xl" style={{ color: '#3977db' }}></i><br />
            <h2>Password Reset Successfully</h2><br />
            <p>You have successfully reset your password. Please use your new password to login.</p><br />
            <Link to="/"><input className="loginBox" type="button" value="STAY LOGGED IN" /></Link>
          </div>
        </form>
      )}

      {isLoginFormVisible && (
        <form id="login-form" >
          <div className="loginForm">
            <i className="fa-solid fa-circle-check fa-2xl" style={{ color: '#3977db' }}></i><br />
            <h2>You Logged In Successfully</h2><br />
            <p>You have successfully logged in with your account.</p><br />
            <Link to="/"><input className="startedBox" type="button" value="Get Started" /></Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignIn;
