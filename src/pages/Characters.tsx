import React from 'react'
import { useCharacters } from '../hooks/useCharacters'

const Characters = () => {
  const { data, loading, error } = useCharacters()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="characters-page">
      <h1>Characters</h1>
      <div className="grid">
        {data.map((char) => (
          <div key={char.id} className="card">
            <h3>{char.fullName}</h3>
            {char.portrait && <img src={char.portrait} alt={char.fullName} width="100" />}
            <p>Faction: {char.factionName || 'N/A'}</p>
            <p>Race: {char.raceName || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
