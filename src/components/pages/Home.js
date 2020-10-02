import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <h1 className="card-header main-navbar">Converter</h1>
      <div className="card-body">
        <p className="card-text">What you need to convert?</p>
        <Link className="btn btn-block btn-primary-color" to="/temp">
          Temperature
        </Link>
        <Link className="btn btn-block btn-secondary-color" to="/weight">
          Weight
        </Link>
        <Link className="btn btn-block btn-teritiary-color" to="/currency">
          Currency
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
