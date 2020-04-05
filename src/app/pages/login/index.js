import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/birds.png';

function Login() {
  return (
    <div className='login'>
      <div className='login-box'>
        <img src={Logo} alt='Logo' />
        <input type='text' placeholder='Username' />
        <Link to='/chat' className='button'>
          <button type='button'>Enter</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
