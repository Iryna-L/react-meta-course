import React, { useState } from 'react';
import * as Yup from 'yup';

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

  const schema = Yup.object().shape({
    date: Yup.date().required('Date is required').min(new Date(), 'Date must be in the future'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().required('Number of guests is required').min(1, 'Minimum 1 guest required').max(10, 'Maximum 10 guests allowed'),
    occasion: Yup.string().required('Occasion is required'),
  });

  const validateForm = async () => {
    try {
      await schema.validate({ date, time, guests, occasion }, { abortEarly: false });
      return true;
    } catch (errors) {
      alert(errors)
      console.error(errors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      const reservation = {
        date: date,
        time: time,
        guests: guests,
        occasion: occasion
      };
      submitForm(reservation);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setAvailableTimes({ setBookingDate: new Date(e.target.value) });
  };

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
      <button type="submit" value="Confirm Reservation" aria-label="Submit" />
    </form>
  );
};

export default BookingForm;
