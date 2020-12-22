import React, { useState, useEffect } from 'react';
import instance from '../../js/axios';
import requests from '../../js/requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  //to set random movie to display in the main banner
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',

        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="buttons">
          <button className="bannerBtn">Play</button>
          <button className="bannerBtn">My List</button>
        </div>
        <h1 className="bannerDescription">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
