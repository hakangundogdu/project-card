import React from 'react';

const Project = (props) => {
  console.log(props.image_url);

  return (
    <div className="project-card">
      <h2 className="project-title">{props.project_title}</h2>
      <p className="project-department">{props.project_department}</p>
      <img className="person-image" src={props.image_url} alt="user" />
    </div>
  );
};

export default Project;
