import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(props) {
  const {movie} = props;
  return (
    // Use to display each one of the movies
    <div>
      <img src={movie.image} alt="poster"/>
      <Link to='/movie/:id'><h2 >{movie.title}</h2></Link>
    </div>

  )
}


