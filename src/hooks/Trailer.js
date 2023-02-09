import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const Trailer = (props) => {
  console.log(props);
  const [status, setStatus] = useState(false);
  const [getVideo, setGetVideo] = useState("");

  const test = async () => {
    console.log(props.inf.item.id);
    console.log(props.inf.item.backdrop_path);

    const response = await fetch(
      `https://api.themoviedb.org/3//movie/${props.inf.item.id}/videos?api_key=c08925b0a10a9ed2a65bf9f938d20719`
    );
    const data = await response.json();

    console.log(data);

    let arrayFilter = data?.results?.filter((e) => {
      return (
        e.site === "YouTube" && (e.type === "Trailer" || e.type === "Teaser")
      );
    });

    console.log(arrayFilter);

    if (arrayFilter?.length === 0) {
      setStatus(false);
    } else {
      setGetVideo(arrayFilter[0]);
      console.log(arrayFilter);
      setStatus(true);
    }
  };

  useEffect(() => {
    test();
  }, [props]);

  console.log(getVideo);
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  // console.log(props.inf.id);
  return (
    <div>
      {status && <YouTube videoId={getVideo.key} opts={opts} />}
      {!status && (
        <img
          src={`https://image.tmdb.org/t/p/original${props.inf.item.backdrop_path}`}
          width="100%"
          height="400px"
        />
      )}
    </div>
  );
};
export default Trailer;
