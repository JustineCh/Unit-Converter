import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';


function Navbar(props) {
   return (
      <div className="card-header d-flex flex-row align-items-center">
         <Link to={"/"} className="back-icon" ><FontAwesomeIcon icon={faChevronCircleLeft} size="2x" /></Link>
         <h2 className="">{props.title}</h2>
      </div>
   )
}

Navbar.propTypes = {
   title: PropTypes.string.isRequired,
 };

export default Navbar;
