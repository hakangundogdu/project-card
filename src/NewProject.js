import React, { useState } from 'react';
import Users from './User';
import daniel from './images/image-daniel.jpg';
import kira from './images/image-kira.jpg';
import patrick from './images/image-patrick.jpg';

const ProjectForm = (props) => {
  const users = [
    {
      id: 'u1',
      user_name: 'Daniel',
      image_url: daniel,
    },
    {
      id: 'u2',
      user_name: 'Kira',
      image_url: kira,
    },
    {
      id: 'p3',
      user_name: 'Patrick',
      image_url: patrick,
    },
  ];
  return (
    <form className="project-form">
      <h2 className="project-title">Add a New Project</h2>
      <form className="search-box">
        <input className="input-text" placeholder="Project Title" />
      </form>
      <form className="search-box">
        <input className="input-text" placeholder="Department Name" />
      </form>
      <div className="user-list">
        <p>Please choose a person</p>
        <div className="user-container">
          {users.map((user) => (
            <Users user_name={user.user_name} image_url={user.image_url} />
          ))}
        </div>
      </div>
      <div className="button-container">
        <div className="cancel-button" onClick={props.onCancel} type="button">
          Cancel
        </div>
        <div className="button" onClick={props.onCancel} type="submit">
          Add Project
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
