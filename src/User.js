import React from 'react';

const User = ({ onClick, image_url, user_name, selected }) => {
  return (
    <div onClick={onClick} className={`user ${selected ? 'selected' : ''} `}>
      <img className="userimage" src={image_url} alt={user_name} />
      <p className="user-name">{user_name}</p>
    </div>
  );
};

export default User;
