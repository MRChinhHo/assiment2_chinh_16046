import React,{useState} from "react";
import classes from './Search.module.css';
import Navbar from "../navbar/Navbar";
import SeachForm from "./SearchForm";
import MovieDetail from "../../banner/MovieDetail/MovieDetail";
import SearchList from "./SearchList";

const Search = () => {
  const [request, setRequest] = useState("");
  const [isShowdetail, setShowdetail] = useState(false);
  const [datadetail, setdatadetail] = useState();
  const [id, setid] = useState();


  const getValue = (data) => {
    
    setRequest(data);
  };
  console.log(request)
  const getId = (data) => {
    console.log(data);
    setdatadetail(data);
    setid(data.id);
    if (data.id == id) {
      // setShowdetail(`${isShowdetail ? false : true}`);
      setShowdetail(false);
    } else {
      setShowdetail(true);
    }
    console.log(isShowdetail);
  };
  return (
    <div className={classes.search}>
      <Navbar/>
      <SeachForm getValue={getValue}/>
      <h2 className={classes.title}>Search Result</h2>
      <SearchList value={request} getId={getId}/>
      {isShowdetail && <MovieDetail item={datadetail} />}
    </div>
  );
};

export default Search;
