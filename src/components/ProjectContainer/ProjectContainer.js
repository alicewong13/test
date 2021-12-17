import { Link } from 'react-router-dom'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <Link to={`./project${project.number}`}>
    <div className='project'>
      <h3>{project.name}</h3>
      <p className='project__description'>{project.description}</p>
    </div>
  </Link>
)

export default ProjectContainer