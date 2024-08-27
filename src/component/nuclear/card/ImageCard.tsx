import React from 'react';
import {ImageCardProps} from 'src/component/nuclear/card/CardProps';
import { MovieDetail } from 'src/page/movie-data.model';

const Card  = ({movieData,  height = '12rem', onSelect}: {movieData:MovieDetail,  height?: string, onSelect?: Function} ) => {
  const handleCardSelect = () => {
    console.log('card selected');
    if(onSelect  !== undefined){
      onSelect(movieData);
    }
  }
  return (
    <div onClick={handleCardSelect}
      className={`flex-shrink-0 relative max-w-xs rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 m-2 ${movieData.name ? 'hover:scale-105' : ''} `} 
      style={{ height }}
    >
      <img src={movieData.posterUrl} alt={movieData.name} className="w-full h-full object-cover" />
      {movieData.name && (
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex justify-center items-center transition-opacity duration-300">
                <p className="text-white text-lg text-center">{movieData.name}</p>
              </div>
            )}
    </div>
  );
};

export default Card;