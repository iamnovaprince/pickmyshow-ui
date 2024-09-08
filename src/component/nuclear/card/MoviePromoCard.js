import React from 'react';
import  star  from 'src/assets/star.svg';

const MoviePromoCard = ({ movieData }) => {

  const {title, description, genres, ratings, release_date, image_url, director, age_certification, duration} = movieData;

  const genre = genres.join("|");

  return (
    <div style={{width:'100%', height:'fit-content', padding:'40px 200px 40px 200px', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'flex-start', backgroundColor:'#DFDFDE'}}>
      <div style={{ width:"100%", height:"280px", marginTop:'20px', display:'flex', flexDirection: 'column', justifyContent:'space-between', alignItems:'flex-start' }}>
        <div style={{ display:'flex', flexDirection: 'column', alignItems:'flex-start' }} >
          <h1 style={{fontSize:'32px', fontWeight:'500', marginBottom:'5px'}}>{title}</h1>
            <div style={{fontSize:'16px', fontWeight:'500', textAlign:'center', display:'flex', alignItems:'center', gap:'25px', marginBottom:'10px'}}>
              <div style={{ marginLeft:'10px', display:'flex', flexDirection: 'row', alignItems:'center' }}><img src={star} alt="Rating" /><span> {ratings}</span></div>
              <div>{genre}</div>
              <div>{age_certification}</div>
            </div>
          <p style={{ fontSize:'16px', }}>{description}</p>
        </div>
        <div style={{display:'flex', gap:'25px', fontSize:'16px'}}>
          <p><b>Date:</b> {release_date}</p>
          <p><b>Duration:</b> {duration}min</p>
          <p><b>Director:</b> {director}</p>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'150px'}}>
        <img src={image_url} alt={title} style={{ width:'320px', height:"fit-content", borderRadius:'6px'}} />
      </div>
    
    </div>
  );
};

export default MoviePromoCard;
