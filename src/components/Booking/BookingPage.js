import { useReducer } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import BookingForm from './BookingForm'

const Booking = () => {
  function initializeTimes() {
    return {
      times: ['16:00', '17:00', '18:00', '19:00', '20:00'],
    };
  }

  function reducer(state, action) {
    const newTimes = ['16:00', '17:00', '18:00', '19:00', '20:00']
    return { times: [...newTimes] };
  }

  function submitForm(formData) {
    console.log('submit')
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);
  return (
    <div>
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm} />
      <Footer />
    </div>
  )
}

export default Booking