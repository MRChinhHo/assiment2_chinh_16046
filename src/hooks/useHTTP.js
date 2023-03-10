import { useState, useCallback } from "react";

const useHttp = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // setIsLoading(true);
    // setError(null);
    try {
      const response = await fetch(requestConfig.url);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      //   console.log(response);

      const data = await response.json();
      //   console.log(data);
      applyData(data);
    } catch (err) {
      console.log(Error);
      //   setError(err.message || "Something went wrong!");
    }
    // setIsLoading(false);
  }, []);

  return {
    // isLoading,
    // error,
    sendRequest,
  };
};

export default useHttp;
