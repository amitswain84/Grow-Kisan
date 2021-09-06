import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "937fe7a370284e1b85bcc5f5a423a622";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=crop&from=2021-09-06&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};