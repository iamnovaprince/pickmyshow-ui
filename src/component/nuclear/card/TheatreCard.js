import React, { useState } from 'react';
import SeatSelectionComponent from '../modal/seat/SeatSelectionComponent'; // Ensure you import the SeatSelectionComponent

const TheatreCard = ({ movieData }) => {
  const theatreDetails = movieData.theatredetail;

  // Function to get the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so +1
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // State to manage the date input value for each theatre
  const [selectedDates, setSelectedDates] = useState(
    theatreDetails.reduce((acc, theatre, index) => {
      acc[index] = getCurrentDate(); // Initialize each theatre with the current date
      return acc;
    }, {})
  );

  // Modal state and movie selection
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);

  // Handle date change for a specific theatre
  const handleDateChange = (event, index) => {
    setSelectedDates({
      ...selectedDates,
      [index]: event.target.value,
    });
  };

  // Function to open modal
  const openModal = (theatre, time, date, price) => {
    setSelectedTheatre(theatre);
    setSelectedTime(time);
    setSelectedDate(date);
    setSelectedPrice(price);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ width: '100%', height: 'fit-content', padding: '25px 200px' }}>
      <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '25px 0px 0px 80px' }}>Cinemas available</h3>
      <div style={{ marginLeft: '50px' }}>
        {theatreDetails && theatreDetails.length > 0 ? (
          theatreDetails.map((theatre, index) => (
            <div key={index} style={{ margin: '30px', backgroundColor: 'white', padding: '30px 25px', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', marginBottom: '5px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600' }}>{theatre.theatreName}</h3>
                  <p style={{ fontSize: '14px', fontWeight: '400' }}>{theatre.address}, {theatre.city}</p>
                </div>
                <div>
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value={selectedDates[index]} // Controlled value for each theatre
                    min={theatre.start_date}
                    max={theatre.end_date}
                    onChange={(event) => handleDateChange(event, index)} // Update state for specific theatre
                    style={{ fontSize: '13px', fontWeight: '400', border: '1px solid #000000', padding: '2px', borderRadius: '4px' }}
                  />
                </div>
              </div>

              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', gap: '15px' }}>
                <span style={{ marginLeft: '50px' }}><b>Showtime:</b></span>
                {Array.isArray(theatre.Showtime) && theatre.Showtime.length > 0 ? (
                  theatre.Showtime.map((time, idx) => (
                    <button 
                      key={idx} 
                      style={{ fontSize: '14px', color: '#F5F7F8', padding: '5px 8px', borderRadius: '4px', backgroundColor: '#059212' }} 
                      onClick={() => openModal(theatre, time, selectedDates[index], theatre.price)} // Open modal on showtime click with price
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <div>No showtimes available</div>
                )}
              </div>
              <div style={{ fontSize: '14px', margin: '30px 50px 0px 25px', display: 'flex', justifyContent: 'space-between', gap: '25px' }}>
                <div><span><b>Price:</b> {theatre.price}rs</span></div>
                <div><span><b>Audi-No:</b> {theatre.audiNumber}</span></div>
              </div>
            </div>
          ))
        ) : (
          <div>No theatres available</div>
        )}
      </div>

      {/* Modal for seat selection */}
      {isModalOpen && selectedTheatre && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h3 style={{marginBottom:"6px", fontSize:"25px", fontWeight:"500"}}>{selectedTheatre.theatreName} - Seat Selection</h3>
            <div style={{margin:"0px 0px 20px 20px", fontSize:"18px"}}>{movieData.title} {selectedTime} | {selectedDate}</div>
            <SeatSelectionComponent
              movie={movieData.title} 
              theatre={selectedTheatre} 
              time={selectedTime} 
              date={selectedDate} 
              price={selectedPrice} 
              occupiedSeats={selectedTheatre.occupiedSeats} // Use selectedTheatre.occupiedSeats
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TheatreCard;
