import React from 'react';
import { NavLink ,Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
            <nav className="navbar navbar-expand-lg  shadow-sm  navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">CURD</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item ">
                    <NavLink className="nav-link text-capitalize" to="/">Home </NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link text-capitalize" to="/about">about </NavLink>
                </li>
                {/* <li className="nav-item active">
                    <NavLink className="nav-link text-capitalize" to="/contact">contact </NavLink>
                </li> */}
                </ul>
            </div>
            </nav>
            
    );
};

export default Navbar;