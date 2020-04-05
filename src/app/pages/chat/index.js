import React from 'react';
import './style.css';

function Chat() {
  const elements = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3];

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
            elements.map(() => (
              <div className='user'>
                <div>
                  <div className='dot' />
                  <h5>Fernando</h5>
                </div>
                <h6>
                  ID: A6F87B
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
