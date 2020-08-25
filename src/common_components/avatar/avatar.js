import React from 'react';

function Avatar() {
  return (
    <img
      className="slidebar_avatar"
      src={localStorage.getItem('avatarUrl')}
      alt="avatar"
    ></img>
  );
}

export default Avatar;
