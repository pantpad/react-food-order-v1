import { useEffect, useState } from "react";

export function useFetch(fetchFunction, initValue) {
  const [data, setData] = useState(initValue);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const data = await fetchFunction();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, [fetchFunction]);

  return { data, error, isFetching, setData, setError, setIsFetching };
}
