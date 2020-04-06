import React, { useEffect, useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { FiLogOut, FiSend } from 'react-icons/fi';
import socket from '../../services/socket';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const history = useHistory();

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

  function disconnect() {
    socket.disconnect();
    history.goBack();
  }

  function send() {
    if (message !== '') {
      const msg = {
        id: user.id,
        name: user.name,
        message,
      };
      setMessage('');
      socket.emit('message', msg);
    }
  }


  return (
    <div className='chat'>
      <div className='chat-box'>
        <div className='conversation'>
          <div className='history'>
            {
              messages.map((element, index) => (
                (element.id === user.id) ? (
                // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className='message right-message'>
                    <h5>
                      {element.name}
                      {' '}
                      said:
                    </h5>
                    <h6>
                      {element.message}
                    </h6>
                  </div>
                ) : (
                // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className='message'>
                    <h5>
                      {element.name}
                      {' '}
                      said:
                    </h5>
                    <h6>
                      {element.message}
                    </h6>
                  </div>
                )
              ))
            }
          </div>
          <div className='input'>
            <input
              type='text'
              placeholder='Type a message'
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onSubmit={(event) => setMessage(event.target.value)}
            />
            <button type='button' onClick={send}>
              <FiSend size={20} />
              &nbsp;
            </button>
          </div>
        </div>
        <div className='online'>
          <div className='user'>
            <div className='infos'>
              <div className='dot' />
              <h5>{user.name}</h5>
            </div>
            <div className='logout'>
              <button type='button' onClick={disconnect}>
                <FiLogOut size={20} />
                &nbsp;
              </button>
            </div>

          </div>
          {
            users.map((local_user) => (
              (local_user.id !== user.id)
                ? (
                  <div className='user'>
                    <div className='infos'>
                      <div className='dot' />
                      <h5>{local_user.name}</h5>
                    </div>
                  </div>
                )
                : null
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Chat;
