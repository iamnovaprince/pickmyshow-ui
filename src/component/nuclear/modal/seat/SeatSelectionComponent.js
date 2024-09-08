import './Style.css'
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

const numRows = 8
const numCols = 8
const seats = Array.from({ length: numRows * numCols }, (_, i) => i)

export default function SeatSelectionComponent({movie,theatreName,time,date,price,occupiedSeats}) {
  const [selectedSeats, setSelectedSeats] = useState([])
  const [showTicket, setShowTicket] = useState(false)

  // Handle seat selection and update state
  function toggleSeatSelection(seat) {
    setSelectedSeats(prevSelectedSeats => {
      const isSelected = prevSelectedSeats.includes(seat)
      const updatedSeats = isSelected
        ? prevSelectedSeats.filter(selectedSeat => selectedSeat !== seat)
        : [...prevSelectedSeats, seat]

      console.log(`Seat ${seat} ${isSelected ? 'deselected' : 'selected'}`)
      console.log('Updated Selected Seats:', updatedSeats)
      return updatedSeats
    })
  }

  // Convert seat number to coordinates
  const getSeatCoordinates = seat => {
    const row = Math.floor(seat / numCols) + 1
    const col = (seat % numCols) + 1
    return { row, col }
  }

  // Log the coordinates of selected seats
  useEffect(() => {
    const coordinates = selectedSeats.map(seat => getSeatCoordinates(seat))
    console.log('Selected Seats Coordinates:', coordinates)
  }, [selectedSeats])

  // Handle payment button click
  const handlePaymentClick = () => {
    setShowTicket(true)
  }

  return (
    <div className="App">
      <ShowCase />
      <Cinema
        occupiedSeats={occupiedSeats}
        selectedSeats={selectedSeats}
        onSeatToggle={toggleSeatSelection}
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span> seats for the price of{' '}
        <span className="total">
          {selectedSeats.length * price}$
        </span>
      </p>

      <button className="payment-button" onClick={handlePaymentClick}>
        Proceed to Payment
      </button>

      {showTicket && (
        <div className="ticket">
          <h2>Your Ticket</h2>
          <p><strong>Movie:</strong> {movie}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Theatre:</strong> {theatreName}</p>
          <p><strong>Total Payment:</strong> {selectedSeats.length * price}$</p>
        </div>
      )}
    </div>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ occupiedSeats = [], selectedSeats = [], onSeatToggle }) {
  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = occupiedSeats.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => onSeatToggle(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        onSeatToggle(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}
