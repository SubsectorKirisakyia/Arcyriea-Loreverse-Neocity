import { useFactions } from '../hooks/useFactions';
import './Factions.css';

const Factions = () => {
  const { data, loading, error } = useFactions();

  if (loading) return <div className="page-status">Loading factions...</div>;
  if (error) return <div className="page-status error">Error: {error}</div>;

  return (
    <div className="factions-page">
      <h1>Factions</h1>
      <p className="page-subtitle">Organized groups and cosmic alliances</p>
      <div className="factions-grid">
        {data.map((faction) => (
          <div key={faction.id} className="faction-card">
            <div className="faction-header">
              {faction.symbol && <img src={faction.symbol} alt="" className="faction-symbol" />}
              <h3>{faction.name}</h3>
            </div>
            <div className="faction-details">
              <p><strong>Primary Race:</strong> {faction.raceName || 'Multi-ethnic'}</p>
              {faction.foundingDate && <p><strong>Founding Date:</strong> {new Date(faction.foundingDate).toLocaleDateString()}</p>}
              {faction.lore && <p className="faction-lore">{faction.lore}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Factions;
