import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { mount } from '../../../test/enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../store/reducers';
import LoginForm from './loginForm';
import LoginLayout from './loginLayout';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

describe('LoginLayout Test', () => {
  let wrapper;
  it('should display the signup properly', () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Route
            render={() => {
              return <LoginLayout />;
            }}
          />
        </Router>
      </Provider>
    );
    
    expect(wrapper.find('header')).toBeTruthy();
    expect(wrapper.find('.back')).toBeTruthy();
    expect(wrapper.find('section').hasClass('grid')).toBeTruthy();
  });
});
describe('Signup form', () => {
  let wrapper;
  beforeEach(() => {
   wrapper = mount( 
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>
     );
  });
  it('Should render a form for signup', () => {
    expect(wrapper.find('h3').text()).toEqual('LOGIN');
    expect(wrapper.find('form')).toBeTruthy();
  })
});
