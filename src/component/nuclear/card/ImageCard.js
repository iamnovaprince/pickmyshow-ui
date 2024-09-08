import React from 'react';
import { useNavigate } from 'react-router-dom';
import  star  from 'src/assets/star.svg';


const Card = ({ movieData, onSelect }) => {
  const navigate = useNavigate();
  const {title, genres, ratings, image_url} = movieData;

  const handleCardSelect = () => {
    console.log('card selected');
    if (onSelect) {
      onSelect(movieData);
    }
    // Navigate to the MoviePage route with movie data
    navigate('/moviepage', { state: { movieData } });
  };

  const genre = genres.join("|");

  return (
    <div onClick={handleCardSelect} className={`flex-shrink-0 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 m-2 ${title ? 'hover:scale-105' : ''}`} style={{ width: "220px", height: "365px" }}> 
      
      <div>
        <div>
          <img src={image_url} alt={title} style={{ width:'100%', height:"320px"}} />
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:"12px 10px 8px 10px"}}>
            <div style={{fontSize:'13px', textAlign:'center', fontWeight:'500' }}>{genre}</div>
            <div style={{fontSize:'12px', fontWeight:'500', textAlign:'center', display:'flex', alignItems:'center'}}>
              <img src={star} alt="Rating" />
              <span>{ratings}</span>
            </div>
          </div>
          {title && (
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex flex-col justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg text-center">{title}</p>
            <p className="text-white text-sm text-center">Click to book ticket</p>
          </div>)}
        </div>
        
      </div>
    </div>
  );
};

export default Card;
