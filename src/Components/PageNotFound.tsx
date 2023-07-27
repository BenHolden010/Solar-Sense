import './PageNotFound.css'
import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="error-page">
      <h1 className='error-message'>404 page not found</h1>
      <NavLink to="/" className="error-to-home">
        <p className="try-again">Please try again</p>
      </NavLink>
    </div>
  )
}

export default PageNotFound;