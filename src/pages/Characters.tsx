import { useCharacters } from '../hooks/useCharacters';
import './Characters.css';

const Characters = () => {
  const { data, loading, error } = useCharacters();

  if (loading) return <div className="page-status">Loading characters...</div>;
  if (error) return <div className="page-status error">Error: {error}</div>;

  return (
    <div className="characters-page">
      <h1>Characters</h1>
      <p className="page-subtitle">Archives of notable figures and entities</p>
      <div className="characters-grid">
        {data.map((char) => (
          <div key={char.id} className="character-card">
            {char.portrait ? (
              <img src={char.portrait} alt={char.fullName} className="character-portrait" />
            ) : (
              <div className="character-portrait placeholder">No Image</div>
            )}
            <div className="character-info">
              <h3>{char.fullName}</h3>
              <p><strong>Faction:</strong> {char.factionName || 'Independent'}</p>
              <p><strong>Race:</strong> {char.raceName || 'Unknown'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
