import React, { Component } from 'react';
import './Footer.css';
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer col-lg-12 text-center">
            <a href="https://twitter.com/steven_barash">
              <i className="footer-icon fab fa-facebook-square m-2" />
            </a>
            <a href="https://www.linkedin.com/in/stevenbarash">
              <i className="footer-icon fab fa-linkedin m-2" />
            </a>
            <a href="https://www.instagram.com/stevenbarash/">
              <i className="footer-icon fab fa-instagram m-2" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
