import React from 'react';

const User = (props) => {
  return (
    <div className="user">
      <img className="userimage" src={props.image_url} />
      <p className="user-name">{props.user_name}</p>
    </div>
  );
};

export default User;
