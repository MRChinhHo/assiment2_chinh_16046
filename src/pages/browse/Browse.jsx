import React, { useCallback, useState } from "react";
import Banner from "../../banner/Banner";
import Navbar from "../navbar/Navbar";
import MovieList from "../../movieList/MovieList";
import classes from "./Browse.module.css";
import MovieDetail from "../../banner/MovieDetail/MovieDetail";
import ReactDOM from "react-dom";



function Browse() {
  const API_KEY = "c08925b0a10a9ed2a65bf9f938d20719";
  const [isShowdetail, setShowdetail] = useState(false);
  const [id, setid] = useState();
  const [detail, setdetail] = useState();
  const getdetail = (data) => {
    console.log(data);
    setid(data.id);
    // lấy id movie
    setdetail(data);
    // lấy thông tin của movie khi click
    if (data.id == id) {
      // setShowdetail(`${isShowdetail ? false : true}`);
      setShowdetail(false);
      // nếu bấm lại video hiện tại thì tắt
    } else {
      setShowdetail(true);
      // bấm video khác thì hiện
    }
    console.log(isShowdetail);
  };

  const requests = [
    {
      url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`,
      type: "Originals",
    },
    {
      url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
      type: "Xu Hướng",
    },
    {
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      type: "Xếp hạng cao",
    },
    {
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
      type: "Hành động",
    },
    {
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
      type: "Hài",
    },
    {
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
      type: "Kinh dị",
    },
    {
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      type: "Lãng mạng",
    },
    {
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
      type: "Tài Liệu",
    },
  ];
  const list = requests.map((item, index) => {
    return (
      <MovieList
        key={index.toString()}
        url={item.url}
        type={item.type}
        getdetail={getdetail}
      />
    );
  });

  return (
    <div className="app">
      <Navbar />
      <Banner url={requests[0].url} />
      <div className={classes.list}>{list}</div>
      {isShowdetail &&
        ReactDOM.createPortal(
          <MovieDetail item={detail} />,
          document.getElementById("detail")
        )}
    </div>
  );
}

export default Browse;
