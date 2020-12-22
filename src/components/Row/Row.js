import React, { useState, useEffect } from 'react';
import instance from '../../js/axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const img_base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ genre, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  //code to run on specific condition/variable
  useEffect(() => {
    // if [], run ONLY once when the row loads
    //[movies] => depending on change of [movies], run code
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      // >>https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213;

      setMovies(request.data.results);
      // console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const showTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <h1>{genre}</h1>

      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => showTrailer(movie)}
            className={`posterImg ${isLargeRow && 'posterImgLarge'}`}
            //if isLargeRow is true ? x : if not y
            src={`
              ${img_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }
            `}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
