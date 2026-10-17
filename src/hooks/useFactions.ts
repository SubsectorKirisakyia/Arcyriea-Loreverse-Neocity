import { useState, useEffect } from 'react';
import { apiClient } from '../services/apiClient';
import type { Faction } from '../types/lore';

export const useFactions = () => {
  const [data, setData] = useState<Faction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient.get<Faction[]>('/api/public/factions')
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
