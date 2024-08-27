import React from 'react';
import ImageCard from './ImageCard';
import { MovieDetail } from 'src/page/movie-data.model';

const MoviePromoCard= ({ movieData}: { movieData: MovieDetail }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="lg:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-4">{movieData.name}</h2>
        <p className="text-gray-600 mb-4">{movieData.description}</p>
        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <p>Book Seats</p>
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <div>
            <span className="text-3xl font-bold">{2}</span>
            <p className="text-gray-500">{5}</p>
          </div>
          <div className="flex items-center">
            <span className="text-3xl font-bold">{3}</span>
            <div className="flex items-center ml-1">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <p className="text-gray-500 ml-2">{10}</p>
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2 p-6 justify-evenly">
       <ImageCard  movieData={movieData} height='25rem' /> 
      </div>
    </div>
  );
};

export default MoviePromoCard;
