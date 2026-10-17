import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Loreverse</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/factions">Factions</Link>
          <Link to="/races">Races</Link>
          <Link to="/partners">Partners</Link>
        </div>
      </div>
    </nav>
  );
};
