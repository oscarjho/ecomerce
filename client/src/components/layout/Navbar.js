import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="/">Features</a>
          <a className="p-2 text-dark" href="/">Enterprise</a>
          <a className="btn btn-outline-primary" href="/register">Sign up</a>
          &emsp;
          <a className="btn btn-outline-secondary" href="/">Login</a>
          &emsp;
          <a className="btn btn-outline-dark" href="/"> <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className="badge">4</span> 
          </a>
        </nav>
      </div>
    )
  }
}

export default Navbar;