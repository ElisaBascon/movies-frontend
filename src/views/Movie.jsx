import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  console.log(id)

useEffect (() => {
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`);
      setMovie(response.data.data)
    } catch (error) {
      console.error(error);
    }
  }
  getData();
}, [id]);

const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:8000/api/v1/movies/${id}`);
    navigate('/');
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div>
      <h2>Movie details</h2>
      {movie && (
        <div>
          <img src={movie.image} alt="poster"/>
          <h4>{movie.title}</h4>
          <h6>{movie.year}</h6>
          <h6>{movie.director}</h6>
          <h6>{movie.duration}</h6>
          <button onClick={handleDelete}>Delete</button>
        </div>)}
        {!movie && <p>Movie not found</p>}
    </div>
  )
}
