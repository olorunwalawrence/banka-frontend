import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayNone } from './styles';
import { logout } from '../store/actions/common';
export const Header = () => (
  <>
    <header className="header grid-l">
      <div className="container">
        <h1>MyBanka</h1>
      </div>
    </header>
  </>
)

export const drop = () => {
  const btn = document.querySelector('.drop-menu');
  btn.style.display === 'none' ? btn.style.display = 'block' : btn.style.display = 'none'
}
const UserHeader = props => (
  <>
    <div className="container" id="heed">
      <h1 className='white'>
        <span>
          <button type="button" onMouseDown={drop} className="drop-butn nn hiden">
            <i className="icofont-navigation-menu icofont-2x"></i>
          </button>MyBanka
        </span>          
      </h1>
        </div>
        <ul className=" drop-menu hide" style={displayNone}>
            <Link to="/home"><li>Dashboard</li></Link>
            <Link to="/account"><li>Create Account</li></Link>
            <Link to="/" onClick={props.logout}><li>Logout</li></Link>
        </ul>
  </>
)
UserHeader.propType = {
  logout: PropType.func.isRequired,
}
export default connect(null, { logout })(UserHeader);
