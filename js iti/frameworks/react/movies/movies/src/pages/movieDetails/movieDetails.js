import React, { useState, useEffect } from 'react';
import axiosInstance from '../../network/axiosInterceptor';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './movieDetails.css';

function Movie(props) {

  const [movie, setMovie] = useState([]);
  const apiKey = 'b6613b84db5c06f5b219a2f74c791d29';
  useEffect(()=>{
    axiosInstance.get(`/3/movie/${props.match.params.id}?api_key=${apiKey}`)
    .then(res=>setMovie(res.data))
    .catch(err=>console.error(err));
  }, []);
  console.log(movie);

  return(
    <div className="container movie-details">
      <div className="card movie__card">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="..." 
          className='img-fluid movie__img'
        />
        <div className="card-body movie__content">
          <h5 className="card-title movie__title">{movie.title}</h5>
          <p className="card-text movie__overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
    
}

export default Movie;