import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Little Lemon logo" />
        <ul>
          <li className='nav-link'><Link to="/">Home</Link></li>
          <li className='nav-link'><Link to="/booking">Reservations</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header