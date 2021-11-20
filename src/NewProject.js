import React, { useState } from 'react';
import User from './User';
import daniel from './images/image-daniel.jpg';
import kira from './images/image-kira.jpg';
import patrick from './images/image-patrick.jpg';

const NewProject = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDepartment, setEnteredDepartment] = useState('');
  const [enteredPerson, setEnteredPerson] = useState('');
  const [selected, setSelected] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const departmentChangeHandler = (event) => {
    setEnteredDepartment(event.target.value);
  };

  const personChangeHandler = (url) => {
    setEnteredPerson(url);
    setSelected(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const projectData = {
      id: Math.random().toString(),
      project_title: enteredTitle,
      project_department: enteredDepartment,
      image_url: enteredPerson,
    };
    props.onAddProject(projectData);
    props.onCancel();

    setEnteredTitle('');
    setEnteredDepartment('');
    setEnteredPerson('');
  };

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
    <form className="project-form" onSubmit={submitHandler}>
      <h2 className="project-title">Add a New Project</h2>
      <div className="search-box">
        <input
          className="input-text"
          placeholder="Project Title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="search-box">
        <input
          className="input-text"
          placeholder="Department Name"
          value={enteredDepartment}
          onChange={departmentChangeHandler}
        />
      </div>
      <div className="user-list">
        <p>Please choose a person</p>
        <div className="user-container">
          {users.map((user) => (
            <User
              selected={selected}
              onClick={() => personChangeHandler(user.image_url)}
              user_name={user.user_name}
              image_url={user.image_url}
            />
          ))}
        </div>
      </div>
      <div className="button-container">
        <div className="cancel-button" onClick={props.onCancel} type="button">
          Cancel
        </div>
        <div className="button" onClick={submitHandler} type="submit">
          Add Project
        </div>
      </div>
    </form>
  );
};

export default NewProject;
