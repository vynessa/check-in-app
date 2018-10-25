import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @class ErrorPage
 * @extends {Component}
 */
const ErrorPage = () => {
  /**
   * @returns {JSX.Element} ErrorPage
   * @memberof ErrorPage
   */
  return (
    <div>
      <div className="container display-error-page">
        <div className="display-email-details">
          <h3>Page Not Found!</h3>
          <p>Oops! Sorry, there is nothing to see here</p>
          <p><Link to="/">Back to Home Page</Link></p>
        </div>
      </div>  
    </div>
  );
};


export default ErrorPage;