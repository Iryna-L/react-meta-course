import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/Home"
import BookingPage from "./components/Booking/BookingPage"
import { useReducer } from 'react'
import {fetchAPI, submitAPI} from "./server/api"

function App() {
  function initializeTimes() {
    return {
      times: [...fetchAPI(new Date())] || [],
    };
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  }

  function submitForm(formData) {
    submitAPI(formData);
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "booking",
    element: <BookingPage
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTimes}
      submitForm={submitForm}
    />,
  }
]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
