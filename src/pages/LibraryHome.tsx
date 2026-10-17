import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import { useFactions } from '../hooks/useFactions';
import { useRaces } from '../hooks/useRaces';
import { usePartners } from '../hooks/usePartners';
import './LibraryHome.css';

const LibraryHome = () => {
  const { data: characters } = useCharacters();
  const { data: factions } = useFactions();
  const { data: races } = useRaces();
  const { data: partners } = usePartners();

  return (
    <div className="library-home">
      <div className="hero-section">
        <h1>Welcome to Loreverse Neocity</h1>
        <p>Explore characters, factions, races, and partner network archives in our comprehensive universe database.</p>
      </div>

      <div className="stats-grid">
        <Link to="/characters" className="stat-card">
          <h2>{characters.length}</h2>
          <p>Characters</p>
        </Link>
        <Link to="/factions" className="stat-card">
          <h2>{factions.length}</h2>
          <p>Factions</p>
        </Link>
        <Link to="/races" className="stat-card">
          <h2>{races.length}</h2>
          <p>Races</p>
        </Link>
        <Link to="/partners" className="stat-card">
          <h2>{partners.length}</h2>
          <p>Partners</p>
        </Link>
      </div>
    </div>
  );
};

export default LibraryHome;
