import { NavLink } from "react-router-dom"
import './Nav.css'


export default function Nav() {


    return (
      
        <nav className="nav">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          <h1 className="title">Solar Sense</h1>
          <NavLink to='/saved-locations'>
            <button className="view-saved-button"><span className="material-symbols-outlined">
           
bookmarks

</span></button>
    </NavLink>
        </nav>
    )
}