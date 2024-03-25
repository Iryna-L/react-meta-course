import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/Home"
import BookingPage from "./components/Booking/BookingPage"
import { useReducer } from 'react'

function App() {
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
    console.log('submit', formData)
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <HomePage />,
  },
  {
    path: "/menu",
    element: <HomePage />,
  },
  {
    path: "/reservations",
    element: <HomePage />,
  },
  {
    path: "/order-online",
    element: <HomePage />,
  },
  {
    path: "/login",
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
