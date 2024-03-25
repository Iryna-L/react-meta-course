import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/Home"
import BookingPage from "./components/Booking/BookingPage"

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
    element: <BookingPage />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
