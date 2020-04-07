import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './style.css';

function Conversation({
  messages, user_id, handleSend,
}) {
  const [message, setMessage] = useState('');

  function sendMessage(event) {
    event.preventDefault();
    handleSend(message);
    setMessage('');
  }

  return (
    <div className='conversation'>
      <div className='history'>
        {
      messages.map((element, index) => (
        (element.id === user_id) ? (
        // eslint-disable-next-line react/no-array-index-key
          <div key={index} className='message right-message'>
            <h5>
              <strong>{element.name}</strong>
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
        <form onSubmit={sendMessage}>
          <input
            type='text'
            placeholder='Type a message'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button type='submit'>
            <FiSend size={20} />
          &nbsp;
          </button>
        </form>
      </div>
    </div>
  );
}
Conversation.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  user_id: PropTypes.string.isRequired,
  handleSend: PropTypes.func.isRequired,
};

export default Conversation;
