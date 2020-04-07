import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function OnlineUsers({ users, user_id }) {
  return (
    <div className='online'>
      {
        users.map((user) => (
          (user.id !== user_id)
            ? (
              <div key={user.id} className='user'>
                <div className='infos'>
                  <div className='dot' />
                  <h5>{user.name}</h5>
                </div>
              </div>
            )
            : null
        ))
      }
    </div>
  );
}
OnlineUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  user_id: PropTypes.string.isRequired,
};

export default OnlineUsers;
