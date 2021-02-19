import React from 'react';
import {Link} from 'react-router-dom';

//Component for Navigation Bar on top of the window
export default function NavBar() {
    return (
                
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">XMeme</Link>
        <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Memes List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Meme</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search Meme</Link>
          </li>
        </ul>
        </div>
      </nav>            
        
    )
}


