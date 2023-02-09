import React from "react";
import classes from "./BannerItem.module.css";

const BannerItem = (props) => {
  //   console.log(props.item);
  const link = `https://image.tmdb.org/t/p/original${props.item.backdrop_path}`;
  console.log(link);
  return (
    <div className={classes.banner}>
      <img src={link} className={classes.image} />
      <h2 className={classes.name}>{props.item.name}</h2>
      <div className={classes.btn}>
        <button className={classes.button}>Play</button>
        <button className={classes.button}>My List</button>
      </div>
      <p className={classes.overview}>{props.item.overview}</p>
    </div>
  );
};
export default BannerItem;
