import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';


function Navbar({iconClass, title}) {
   return (
      <div className="card-header navbar-div d-flex flex-row justify-content-between align-items-center mt-2 mb-2">
         <Link to={"/"} className={iconClass} ><FontAwesomeIcon icon={faChevronCircleLeft} size="3x" /></Link>
         <p className="navbar-name">{title}</p>
      </div>
   )
}

Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   iconClass: PropTypes.string.isRequired,
 };

export default Navbar;
