import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/useHTTP";
import classes from "./SearchList.module.css";

const SearchList = (props) => {
  console.log(props);
  const [request, setrequest] = useState([]);
  const { sendRequest } = useHttp();
  useEffect(() => {
    const transformTasks = (moviesObj) => {
      // let movieArr=[]
      // console.log(moviesObj.results);

      setrequest(moviesObj.results);
    };

    sendRequest(
      {
        url: `https://api.themoviedb.org/3/search/movie?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&language=en-US&query=${props.value}&include_adult=false`,
      },
      transformTasks
    );
  }, [props]);

  //   console.log(request);
  const getId = (item) => {
    // console.log(item);
    props.getId(item);
  };
  const list = request.map((item) => {
    return (
      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        className={classes.item}
        id={item.id}
        onClick={() => getId(item)}
      />
    );
  });
  return <div className={classes.container}>{list}</div>;
};

export default SearchList;
