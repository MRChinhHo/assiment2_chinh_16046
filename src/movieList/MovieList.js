import React, { useState, useEffect } from "react";
import useHttp from "../hooks/useHTTP";
import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  //   console.log(props);
  const [movie, setMovie] = useState([]);

  const { sendRequest } = useHttp();
  let isOriginal = props.type === "Originals";
  // check xem có phải original hay không
  useEffect(() => {
    const transformTasks = (moviesObj) => {
      // let movieArr=[]
      // console.log(moviesObj.results);

      setMovie(moviesObj.results);
      // lấy data của movie
    };

    sendRequest({ url: props.url }, transformTasks);
  }, [sendRequest]);
  // console.log(movie);
  const list = movie.map((item, index) => {
    // console.log(item);
    return (
      <MovieItem
        key={index.toString()}
        movie={item}
        isOriginal={isOriginal}
        click={props.getdetail}
      />
    );
  });

  return (
    <div className={classes.container}>
      <h2 className={classes.type}>{props.type}</h2>
      <div className={classes.cover}>{list}</div>
    </div>
  );
};
export default MovieList;
