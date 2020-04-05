import React, { useEffect, useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { FiLogOut, FiSend } from 'react-icons/fi';
import socket from '../../services/socket';

function Chat() {
  const elements = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3];
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
  });

  function disconnect() {
    socket.disconnect();
    history.goBack();
  }


  return (
    <div className='chat'>
      <div className='chat-box'>
        <div className='conversation'>
          <div className='history'>
            {
              elements.map((element, index) => {
                if (element === 1) {
                  return (
                    <div className='message right-message'>
                      <h5>Fernando said:</h5>
                      <h6>
                        {index}
                        {' '}
                        - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </h6>
                    </div>
                  );
                }
                return (
                  <div className='message'>
                    <h5>Fernando said:</h5>
                    <h6>
                      {index}
                      {' '}
                      - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>
                  </div>
                );
              })
            }
          </div>
          <div className='input'>
            <input type='text' placeholder='Type a message' />
            <button type='button'>
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
