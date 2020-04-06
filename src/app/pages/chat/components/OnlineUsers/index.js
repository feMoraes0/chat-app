import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function OnlineUsers({ users }) {
  return (
    <div className='online'>
      {
        users.map((user) => (
          <div className='user'>
            <div className='infos'>
              <div className='dot' />
              <h5>{user.name}</h5>
            </div>
          </div>
        ))
      }
    </div>
  );
}
OnlineUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OnlineUsers;
