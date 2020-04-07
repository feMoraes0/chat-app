import React, { useState, useEffect } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/birds.png';
import socket from '../../services/socket';

function Login() {
  const [name, setName] = useState('');
  const history = useHistory();

  function enter(value) {
    sessionStorage.setItem('name', value);
    if (value !== '') {
      socket.io.opts.query = {
        name: value,
      };

      socket.connect();

      history.push('/chat');
    }
  }

  useEffect(() => {
    const session_name = sessionStorage.getItem('name');
    if (session_name !== null) {
      enter(session_name);
    }
  }, []);

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
        <button type='button' onClick={() => enter(name)}>Enter</button>
      </div>
    </div>
  );
}

export default Login;
