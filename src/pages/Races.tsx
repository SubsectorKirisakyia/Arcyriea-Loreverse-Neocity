import { useRaces } from '../hooks/useRaces';
import './Races.css';

const Races = () => {
  const { data, loading, error } = useRaces();

  if (loading) return <div className="page-status">Loading races...</div>;
  if (error) return <div className="page-status error">Error: {error}</div>;

  return (
    <div className="races-page">
      <h1>Races</h1>
      <p className="page-subtitle">Species and lineages across the Loreverse</p>
      <div className="races-list">
        {data.map((race) => (
          <div key={race.id} className="race-card">
            <h3>{race.name}</h3>
            {race.lore && <p className="race-lore">{race.lore}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Races;
