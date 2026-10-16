import { useState, useEffect } from 'react';
import { apiClient } from '../services/apiClient';
import { Character } from '../types/lore';

export const useCharacters = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient.get<Character[]>('/api/public/characters')
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
