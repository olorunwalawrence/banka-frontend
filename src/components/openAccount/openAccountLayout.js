import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Form from './createForm';
import UserHeader from '../header';
import { logout } from '../../store/actions/common';

const Layout = props => {
  const page = (
    <>
      <UserHeader />
      <main className='flex'>
        <div className="one-third aside">
          <ul className="user">
            <li><Link to='/home'>Dashboard</Link></li>
            <li><Link to='/account'>Create Account</Link></li>
            <li><Link to='/' onClick={logout}>Logout</Link></li>
          </ul>
        </div>
        <div className='two-third main'>
          <Form />
        </div>
      </main>
    </>
  );
  
  return (
    !props.user.email ? <Redirect to='/login' /> : page
  )
}

Layout.propType = {
  user: PropType.object.isRequired,
};

const mapToProps = state => ({
  user: state.auth.user
});

export default connect(mapToProps, null)(Layout);