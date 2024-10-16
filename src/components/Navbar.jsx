import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/products'}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={'/cart'}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
