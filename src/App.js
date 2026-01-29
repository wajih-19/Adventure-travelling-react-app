import React from 'react';
import Home from "./routes/Home";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import { Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
