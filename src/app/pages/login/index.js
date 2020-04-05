import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/birds.png';
import socket from '../../services/socket';

function Login() {
  const [name, setName] = useState('');
  const history = useHistory();

  function enter() {
    if (name !== '') {
      socket.io.opts.query = {
        name,
      };

      socket.connect();

      history.push('/chat');
    }
  }

  return (
    <div className='login'>
      <div className='login-box'>
        <img src={Logo} alt='Logo' />
        <input
          type='text'
          placeholder='Username'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type='button' onClick={enter}>Enter</button>
      </div>
    </div>
  );
}

export default Login;
