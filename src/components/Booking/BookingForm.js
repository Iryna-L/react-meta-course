import React, { useState } from 'react';

const BookingForm = ({ availableTimes, setAvailableTimes, submitForm }) => {
  const initDate = new Date();
  initDate.setDate(initDate.getDate() + 1);
  const YYYY = initDate.getFullYear();
  const MM = (initDate.getMonth() + 1).toString().padStart(2, '0');
  const DD = initDate.getDate().toString().padStart(2, '0');

  const [date, setDate] = useState(`${YYYY}-${MM}-${DD}`);
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('none');

  function isFutureDate(dateString) {
    const ds = dateString.split('-');
    const dateObj = new Date(parseInt(ds[0]), parseInt(ds[1]) - 1, parseInt(ds[2]));
    return dateObj > new Date();
  }

  function getDateObject(dateString) {
    const ds = dateString.split('-');
    return new Date(parseInt(ds[0]), parseInt(ds[1]) - 1, parseInt(ds[2]));
  }

  function handleDateChange(e) {
    if (!isFutureDate(e.target.value)) {
      alert(`Sorry! Reservations not available for this date!`);
      return;
    }
    const dateObject = getDateObject(e.target.value);
    setDate(e.target.value);
    setAvailableTimes({ setBookingDate: dateObject });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const reservation = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion
    };
    submitForm(reservation);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <h1>Book Now</h1>
      <div className="form-group">
        <label htmlFor="Date">Date</label>
        <input id="Date" type="date" name="date" value={date} onChange={handleDateChange} required aria-required="true" />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required aria-required="true">
          {availableTimes.times.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="guests">Guests</label>
        <input id="guests" type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} required aria-required="true" />
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Occasion">
          <option value="none">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <input type="submit" value="Confirm Reservation" role="button" aria-label="Submit" />
    </form>
  );
};

export default BookingForm;
