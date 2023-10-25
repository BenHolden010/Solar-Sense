import { NavLink } from "react-router-dom"
import './Nav.css'

export default function Nav() {

    return (
        <nav className="nav">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className="header-side">
                Weather<br/>
                on the go!<br/>
                <img className="header-image" src="https://i.gifer.com/origin/1b/1b53bba21c786501d711b962ae4fd818_w200.gif"/>
            </div>
            <h1 className="title">Solar+<p className="title black">=Sense</p></h1>
            <NavLink className="header-side" to='/saved-locations'>
                <button className="view-saved-button">View Saved<br/>Locations<br/><span className="material-symbols-outlined">bookmarks</span></button>
            </NavLink>
        </nav>
    )
}