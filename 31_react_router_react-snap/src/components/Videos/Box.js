import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Box.css';


function Box({ vid, img }) {
  return (
    <div className="col-6 box">
      <Link className="image" to={`/vid/${vid}`}>
        <img src={img} alt="" />
      </Link>
      <div className="inner">
        <h3>Video Title</h3>
        <Link className="btn btn-primary fit" to={`/vid/${vid}`}>Watch</Link>
      </div>
    </div>
  );
}

Box.propTypes = {
  vid: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Box;
