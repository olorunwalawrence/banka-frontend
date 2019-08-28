import React from 'react';
import { Link } from 'react-router-dom';
import { marginRight } from '../components/styles'

export default () => (
  <>
    <header className="grid head">
      <div className="image" />
      <div className="container">
        <h1>
          {/* <strong>M</strong>
          y */}
          <strong>B</strong>
          anka
        </h1>
        <p> We keep our words ....</p>
        <Link to="/login" className="btn btn-green" style={marginRight}>Login</Link>
        <Link to="/signup" className="btn btn-border-y">Signup</Link>
      </div>
    </header>
  </>
);