import React from 'react';
import { Header } from '../header';
import Form from './signup';

const SignupLayout = () => {
      return (<>
      <Header />
      <div className='back h'></div>
      <section className='grid'>
        <div className='container'>
          <Form />
        </div>
      </section>
    </>)
};

export default SignupLayout;
