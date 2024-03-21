import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'b3870a33c7msh349b4a4ccc442a9p16db5cjsnff5e2b58cfef',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request(options);

        setData(response.data.data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => { 
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }
  return { data, isLoading, error, refetch };
}

export default useFetch