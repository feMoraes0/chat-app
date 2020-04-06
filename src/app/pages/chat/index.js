import React, { useEffect, useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import socket from '../../services/socket';
import Conversation from './components/Conversation';
import OnlineUsers from './components/OnlineUsers';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const history = useHistory();

  function disconnect() {
    socket.disconnect();
    sessionStorage.clear();
    history.push('/');
  }

  useEffect(() => {
    const { name } = sessionStorage;
    if (name === undefined) {
      disconnect();
    } else {
      socket.on('users', (socket_users) => {
        setUsers(socket_users);
      });

      socket.on('user', (socket_user) => {
        setUser(socket_user);
      });

      socket.on('chat', (socket_msg) => {
        setMessages((old_messages) => [...old_messages, socket_msg]);
      });
    }
  }, []);

  function send(message) {
    if (message !== '') {
      const msg = {
        id: user.id,
        name: user.name,
        message,
      };
      socket.emit('message', msg);
    }
  }

  return (
    <div className='chat'>
      <div className='chat-box'>
        <div className='chat-section'>
          <div className='header'>
            <div className='infos'>
              <div className='dot' />
              <h5>{user.name}</h5>
            </div>
            <div className='logout'>
              <button type='button' onClick={disconnect}>
                <FiLogOut size={22} />
                &nbsp;
              </button>
            </div>
          </div>
          <Conversation
            user_id={user.id}
            messages={messages}
            handleSend={send}
          />
        </div>
        <OnlineUsers
          users={users}
          user_id={user.id}
        />
      </div>
    </div>
  );
}

export default Chat;
