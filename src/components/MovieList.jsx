// import React from 'react'
// import movies from './movies.json'
// import MovieCard from './MovieCard'


// const MovieList = () => {
//   return (
//     <div className='movieListe'>
//        { movies.map((movie,index) => <MovieCard movie={movie} key={index} />)}
//     </div>
//   )
// }

// export default MovieList
import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({ movies }) => {
  return (
    
    
    <div className='movieListe'>
   
      {movies.map((movie, index) => (
        <MovieCard  movie={movie} key={index} />
      ))}
      </div>
   
  
  );
};

export default MovieList;
