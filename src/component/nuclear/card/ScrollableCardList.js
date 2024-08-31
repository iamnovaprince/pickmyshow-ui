import React, { useRef } from 'react';
import ImageCard from './ImageCard';

const ScrollableCardList = ({ items, heading, onSelect }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
      <div className="relative" style={{ margin: '20px 40px 20px 40px'}}>

        <div style={{ margin: '0px 0px 10px 0px'}} >
          <h1 className="text-2xl font-bold text-gray-800">{heading}</h1>
        </div>

        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">
          ◀
        </button>

        <div ref={containerRef} className="flex overflow-x-scroll scrollbar-hide flex-shrink-0" style={{ margin: '0px 35px 0px 35px'}}>
          {items.map((item, index) => (
            <ImageCard key={index} onSelect={onSelect} movieData={item} />
          ))}
        </div>

        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">
          ▶
        </button>
      </div>
  );
};

export default ScrollableCardList;
