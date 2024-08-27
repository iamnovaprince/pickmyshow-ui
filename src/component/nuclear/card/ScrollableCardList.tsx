import React, { useRef } from 'react';
import { ScrollableCardListProps } from 'src/component/nuclear/card/CardProps';
import ImageCard from './ImageCard';


const ScrollableCardList: React.FC<ScrollableCardListProps> = ({ items, height = '12rem' ,heading, subheading,onSelect}) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className='flex p-2 bg-gray-100'>
    <div className="relative">

      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{heading}</h1>
        {subheading && <h2 className="text-lg text-gray-600">{subheading}</h2>}
      </div>

      <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
        ◀
      </button>

      <div ref={containerRef} className="flex overflow-x-scroll scrollbar-hide space-x-4 py-2 flex-shrink-0 w-auto ml-2 mr-2">
        {items.map((item, index) => (
            <ImageCard key={index} onSelect={onSelect}  movieData={item}/>
        ))}
      </div>

      <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
        ▶
      </button>
    </div>
    </div>
  );
};

export default ScrollableCardList;
