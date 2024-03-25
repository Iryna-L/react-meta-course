import Footer from '../Footer'
import Header from '../Header'
import BookingForm from './BookingForm'

const Booking = ({availableTimes, setAvailableTimes, submitForm}) => {

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