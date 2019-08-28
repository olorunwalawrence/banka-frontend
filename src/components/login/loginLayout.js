import React from 'react';
import { Link } from 'react-router-dom';
import Form from './loginForm';
import { Header } from '../header';

const LoginLayout = () => {
 return (
   <>
    <Header />
    <div className='back h'></div>
    <section className='grid'>
      <div className='container'>
        <Form />
        <p className="tip">Dont have an account <Link to='/signup'>Signup</Link></p>
      </div>
    </section>
  </>
 )
}

export default LoginLayout;