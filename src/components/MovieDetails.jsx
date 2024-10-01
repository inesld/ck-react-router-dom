import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import movies  from './movies.json'

const MovieDetails = () => {
const {id}=useParams()
const [movie, setMovie] = useState({})
const navigate = useNavigate()
const findMovie = (id) => {
 const movieFinded = movies.filter((movie)=>(movie.id === parseInt(id)))
 setMovie(movieFinded[0])
}

useEffect(() => {
  findMovie(id)
}, [id])

  return (
    <div>
      <h2> movie id : {movie.title}</h2>
      <button onClick={()=>navigate('/')}> GO to Home Page </button>

    </div>
  )
}

export default MovieDetails