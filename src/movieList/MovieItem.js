import React from "react";
import classes from "./MovieItem.module.css";

const MovieItem = (props) => {
  const link = `https://image.tmdb.org/t/p/original/${
    props.isOriginal ? props.movie.poster_path : props.movie.backdrop_path
  }`;
  // console.log(link);
  const getID = function (e) {
    // let id = e.target.id;
    // console.log("12323123");
    // console.log(props.movie);
    props.click(props.movie);
    // lấy thông tin
  };

  return (
    <div>
      <img
        id={props.movie.id}
        className={`${props.isOriginal ? classes.original : classes.img}`}
        src={link}
        onClick={getID}
      />
    </div>
  );
};
export default MovieItem;
