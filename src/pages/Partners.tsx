import { usePartners } from '../hooks/usePartners';
import './Partners.css';

const Partners = () => {
  const { data, loading, error } = usePartners();

  if (loading) return <div className="page-status">Loading partners...</div>;
  if (error) return <div className="page-status error">Error: {error}</div>;

  return (
    <div className="partners-page">
      <h1>Partners</h1>
      <p className="page-subtitle">The network of creators and allies</p>
      <div className="partners-grid">
        {data.map((partner) => (
          <div key={partner.id} className="partner-card">
            <div className="partner-header">
              {partner.avatarUrl ? (
                <img src={partner.avatarUrl} alt={partner.userName} className="partner-avatar" />
              ) : (
                <div className="partner-avatar placeholder">{partner.userName.charAt(0)}</div>
              )}
              <div className="partner-name-area">
                <h3>{partner.userName}</h3>
                <span className={`badge status-${partner.status?.toLowerCase() || 'unknown'}`}>
                  {partner.status || 'Unknown'}
                </span>
                <span className="badge brand">
                  {partner.tuberBrand || 'Independent'}
                </span>
              </div>
            </div>

            <div className="partner-body">
              {partner.description && <p className="partner-desc">{partner.description}</p>}

              <div className="social-links">
                {partner.youtubeUrl && (
                  <a href={partner.youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-link yt">
                    YouTube
                  </a>
                )}
                {partner.twitchUrl && (
                  <a href={partner.twitchUrl} target="_blank" rel="noopener noreferrer" className="social-link tw">
                    Twitch
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
