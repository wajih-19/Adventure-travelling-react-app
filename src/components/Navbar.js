import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 768){
      setButton(false)
    }
    else{
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);
  
  useEffect(()=>{
    showButton();
  }, []);

  return(
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          TRVL <i class='fab fa-typo3' />
        </Link>
      </div>

      <div className='menu-icon' onClick={handleClick}>
        {click ? <CloseIcon className='close-btn' /> : <MenuIcon className='menu-btn' />}
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className='nav-items'>
          <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
        </li>
        <li className='nav-items'>
          <Link to="/services" className='nav-links' onClick={closeMobileMenu}>Services</Link>
        </li>
        <li className='nav-items'>
          <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link>
        </li>
        {/* <li className='nav-items'>
          <Link to="/sign-in" className='nav-links-mobile' onClick={closeMobileMenu}>Sign In</Link>
        </li>
        <li className='nav-items'>
          <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
        </li> */}
      </ul>

      {button && <Button buttonStyle='btn--outline' to='/signin'>SIGN IN</Button>}
      {button && <Button buttonStyle='btn--primary' to='/signup'>SIGN UP</Button>}
    </nav>
  );
}

export default Navbar