import React from 'react';

const User = (props) => {
  return (
    <div className="user">
      <img className="userimage" src={props.image_url} alt={props.user_name} />
      <p className="user-name">{props.user_name}</p>
    </div>
  );
};

export default User;
