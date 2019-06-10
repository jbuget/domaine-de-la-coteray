import React from "react"
//import backgroundImage from '../../images/osny_vue_aerienne.jpg';
import { Link } from "gatsby"

export default () =>
  <header className="app-header">
    <nav className="navbar container">
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/news">Actualités</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/documents">Documents</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/forum">Forum</Link></li>
      </ul>
    </nav>
  </header>
