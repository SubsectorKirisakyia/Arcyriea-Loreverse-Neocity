import { useState, useEffect } from 'react';
import { apiClient } from '../services/apiClient';
import type { Race } from '../types/lore';

export const useRaces = () => {
  const [data, setData] = useState<Race[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient.get<Race[]>('/api/public/races')
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
