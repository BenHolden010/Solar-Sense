import { NavLink } from "react-router-dom"

export default function Nav() {


    return (
        <nav className="nav">
          <h1>Weather App</h1>
          <NavLink to='/saved-locations'>
            <button>View Saved Locations</button>
          </NavLink>
        
        </nav>
    )
}