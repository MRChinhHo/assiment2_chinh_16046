import React, { useEffect, useState } from "react";
import BannerItem from "./BannerItem";
import useHttp from "../hooks/useHTTP";

const Banner = (props) => {
  const [movie, setMovie] = useState([]);

  const { sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformMovie = (moviesObj) => {
      //   console.log(moviesObj.results[0].name);
      const movie =
        moviesObj.results[
          Math.floor(Math.random() * moviesObj.results.length - 1)
        ];
      // lấy movie ngẫu nhiên
      //   console.log(movie);
      //   console.log(Math.floor(Math.random() * moviesObj.results.length - 1));
      setMovie(movie);
    };

    fetchTasks({ url: props.url }, transformMovie);
  }, [fetchTasks]);
  //   console.log(movie);
  return (
    <div>
      <BannerItem item={movie} />
    </div>
  );
};
export default Banner;
