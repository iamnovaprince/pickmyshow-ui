import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviePromoCard from 'src/component/nuclear/card/MoviePromoCard';
import ThreatreCard from 'src/component/nuclear/card/TheatreCard';

const MoviePage = () => {
  const location = useLocation();
  const { movieData } = location.state || {}; // Get movieData from location state

  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
      {movieData ? (
        <>
          <MoviePromoCard movieData={movieData} />
          <ThreatreCard  movieData={movieData} />
        </>
      ) : (
        <p>No movie data available.</p>
      )}
    </div>
  );
};

export default MoviePage;