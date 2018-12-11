import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Overlay.css';


function Overlay(props) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="video-container">
         <iframe
           src={`http://www.youtube.com/embed/${props.match.params.id}?autoplay=1`}
           frameBorder="0"
           title="vid"
           width="720"
           height="480"
          />
       </div>
        <Link to="/vid" className="closer" >x</Link>
      </div>
    </div>
  );
}

Overlay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default Overlay;
