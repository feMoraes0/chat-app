import React, { useEffect, useState } from 'react';
import './style.css';
// import { useHistory } from 'react-router-dom';
// import { FiLogOut } from 'react-icons/fi';
import socket from '../../services/socket';
import Conversation from './components/Conversation';
import OnlineUsers from './components/OnlineUsers';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  // const history = useHistory();

  useEffect(() => {
    socket.on('users', (socket_users) => {
      setUsers(socket_users);
    });

    socket.on('user', (socket_user) => {
      setUser(socket_user);
    });

    socket.on('chat', (socket_msg) => {
      setMessages((old_messages) => [...old_messages, socket_msg]);
    });
  }, []);

  // function disconnect() {
  //   socket.disconnect();
  //   history.goBack();
  // }

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
        <Conversation
          user_id={user.id}
          messages={messages}
          handleSend={send}
        />
        <OnlineUsers
          users={users}
        />
      </div>
    </div>
  );
}

export default Chat;
