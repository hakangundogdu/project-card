import React, { useState } from 'react';
import './index.css';
import search from './images/search.svg';
import daniel from './images/image-daniel.jpg';
import kira from './images/image-kira.jpg';
import patrick from './images/image-patrick.jpg';
import Project from './Project';
import NewProject from './NewProject';

const DUMMY_PROJECTS = [
  {
    id: 'p1',
    project_title: 'API Integration',
    project_department: 'Engineering',
    image_url: daniel,
  },
  {
    id: 'p2',
    project_title: 'New Benefits Plan',
    project_department: 'Human Resources',
    image_url: kira,
  },
  {
    id: 'p3',
    project_title: 'Onboarding Emails',
    project_department: 'Customer Success',
    image_url: patrick,
  },
];

const App = () => {
  const [projects, setProjects] = useState(DUMMY_PROJECTS);

  const addProjectHandler = (project) => {
    setProjects((prevProjects) => {
      return [project, ...prevProjects];
    });
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <header className="header">
            <h3 className="title">Projects</h3>
            {!isEditing && (
              <div className="button" onClick={startEditingHandler}>
                <p className="button-text">Add New</p>
              </div>
            )}
          </header>
          <div>{isEditing && <NewProject onCancel={stopEditingHandler} />}</div>

          <form className="search-box">
            <img className="search" src={search} alt="search" />
            <input className="input-text" placeholder="Filter projects" />
          </form>
          <div className="project-container">
            {projects.map((project) => (
              <Project
                project_title={project.project_title}
                project_department={project.project_department}
                image_url={project.image_url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
