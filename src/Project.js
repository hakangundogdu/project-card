import React from 'react';

const Project = (props) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{props.project_title}</h2>
      <p className="project-department">{props.project_department}</p>
      <img className="person-image" src={props.image_url} />
    </div>
  );
};

export default Project;
