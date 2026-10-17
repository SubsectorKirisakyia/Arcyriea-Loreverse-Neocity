import { useState, useEffect } from 'react';
import { apiClient } from '../services/apiClient';
import type { Partner } from '../types/lore';

export const usePartners = () => {
  const [data, setData] = useState<Partner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient.get<Partner[]>('/api/partners')
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
