import React, { useState } from 'react';
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";

interface SeatPosition {
    row: number;
    col: number;
  }

const SeatSelection = ({ rowsConfig }: { rowsConfig: number[] }) => {
     const [selectedSeat, setSelectedSeat] = useState<SeatPosition | null>(null);
     
    const handleSeatSelection = (rowIndex: number, colIndex: number) => {
      setSelectedSeat({ row: rowIndex + 1, col: colIndex + 1 });
      console.log(`Seat selected: Row ${rowIndex + 1}, Col ${colIndex + 1}`);
      // Add your logic here to handle the selected seat
    };
  
    return (
        <div className="flex flex-col items-center p-4">
        {rowsConfig.map((columns: number, rowIndex: number) => (
          <div key={rowIndex} className="flex justify-center my-2">
            {Array.from({ length: columns }).map((_, colIndex: number) => (
              <button
                key={colIndex}
                onClick={() => handleSeatSelection(rowIndex, colIndex)}
                className={`w-10 h-10 m-1 border-2 rounded-lg flex items-center justify-center 
                  ${selectedSeat?.row === rowIndex + 1 && selectedSeat?.col === colIndex + 1 
                    ? 'bg-green-500 text-white border-green-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white'}`}
              >
                {selectedSeat?.row === rowIndex + 1 && selectedSeat?.col === colIndex + 1 ? (
                  <MdOutlineAirlineSeatReclineNormal />
                ) : (
                  `${rowIndex + 1}-${colIndex + 1}`
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
};

export default SeatSelection;