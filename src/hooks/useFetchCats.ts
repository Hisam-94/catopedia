import { useState, useEffect } from 'react';
import axios from 'axios';
import { Cat } from '../types';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const useFetchCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: { 'x-api-key': API_KEY },
        });
        setCats(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Error fetching cat data');
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return { cats, loading, error };
};

export default useFetchCats;
