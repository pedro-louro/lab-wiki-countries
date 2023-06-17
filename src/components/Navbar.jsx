import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div clasName="container">
        <NavLink className="navbar-brand" to="/">
          LAB - WikiCountries
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
