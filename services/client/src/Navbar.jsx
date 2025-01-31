import PropTypes from "prop-types";
import NavLink from "./NavLink";

const Navbar = ({ displayLinks }) => (
  <nav
    className="navbar navbar-expand-md sticky-top navbar-dark"
    style={{ backgroundColor: "#5c6784" }}
  >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Penny Jar
      </a>
      {displayLinks && (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tasks">Tasks</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/rewards">Rewards</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  </nav>
);

Navbar.propTypes = {
  displayLinks: PropTypes.bool,
};

export default Navbar;
