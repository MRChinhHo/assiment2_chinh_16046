import React from "react";
import Trailer from "../../hooks/Trailer";
import classes from "./Detail.module.css";

const MovieDetail = (props) => {
  console.log(props);
  return (
    <div className={classes.container}>
      <div className={classes.detail}>
        <div className={classes.inf}>
          <h3 className={classes.name}>
            {props.item.name || props.item.title}
          </h3>
          <div className={classes.gachngang}></div>
          <div>
            Release Date:{" "}
            <span>{props.item.release_date || props.item.first_air_date}</span>
          </div>
          <div>
            Vote:<span>{props.item.vote_average}/10</span>
          </div>
          <p className={classes.overview}>{props.item.overview}</p>
        </div>
      </div>
      <div className={props.item.trailer}>
        <Trailer inf={props} />
      </div>
    </div>
  );
};

export default MovieDetail;
