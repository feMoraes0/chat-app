import React, { useEffect, useState } from 'react';
import './style.css';
import socket from '../../services/socket';
// import socket from '../../services/socket';
// import socket from '../../services/socket';

function Chat() {
  const elements = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3];
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    socket.on('users', (socket_users) => {
      setUsers(socket_users);
    });
    socket.on('user', (socket_user) => {
      setUser(socket_user);
      console.log(socket_user);
    });
  });


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
            <button type='button'>Send</button>
          </div>
        </div>
        <div className='online'>
          {
            users.map((local_user) => (
              <div className='user'>
                <div>
                  <div className='dot' />
                  <h5>{local_user.name}</h5>
                </div>
                <h6>
                  {local_user.id}
                </h6>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Chat;