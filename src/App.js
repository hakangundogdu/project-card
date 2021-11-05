import './index.css';
import search from './images/search.svg';
import plus from './images/plus.svg';
import daniel from './images/image-daniel.jpg';
import kira from './images/image-kira.jpg';
import patrick from './images/image-patrick.jpg';
import Project from './Project';
import NewProject from './NewProject.js';

function App() {
  const projects = [
    {
      id: 'p1',
      project_title: 'API Integration',
      project_department: 'Engineering',
      image_url: 'daniel',
    },
    {
      id: 'p2',
      project_title: 'New Benefits Plan',
      project_department: 'Human Resources',
      image_url: 'kira',
    },
    {
      id: 'p3',
      project_title: 'Onboarding Emails',
      project_department: 'Customer Success',
      image_url: 'patrick',
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <header className="header">
            <h3 className="title">Projects</h3>
            <div className="button">
              <img className="plus" src={plus} alt="plus" />
              <p className="button-text">New</p>
            </div>
          </header>
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
          <div className="project-container">
            <Project
              project_title="API Integration"
              project_department="Engineering"
              image_url={daniel}
            />
            <Project
              project_title="New Benefits Plan"
              project_department="Human Resources"
              image_url={kira}
            />
            <Project
              project_title="Onboarding Emails"
              project_department="Customer Success "
              image_url={patrick}
            />
            <NewProject />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
