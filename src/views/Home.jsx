import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Card from '../components/Card';
import axios from 'axios'

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/movies')
        setMovies(response.data.data);
      } catch(error){
        console.error(error)
      }
    }
    getData();
  }, [])

  return (
    <div>
      <h2>Home</h2>
      {!movies && <p>Loading</p>}
      {movies && movies.map(movie =>  {
        return <Card key={movie._id} movie={movie}/>
      })}
      <Outlet />
    </div>
  )
}
