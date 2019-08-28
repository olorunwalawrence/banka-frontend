import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, toJson } from '../../../test/enzyme';
import Form from './createForm';
import OpenAccountLayout from './openAccountLayout';

let user = {
  id: 2,
  firstname: 'Prince',
  lastname: 'mike',
  email: 'mike@email.com',
  type: 'user',
  isadmin: false,
}
const context = {
  auth: {
    isLoading: false,
    user,
    error: ''
  },
  account: {
    success: '',
    error: '',
    accountDetails: {}
  }
}
const store = {
  getState: () => ({ ... context }),
  subscribe: () => ({}),
  dispatch: () => ({
    type: CREATE_ACCOUNT, 
    payload: {
      success,
      error: '',
      accountDetails: {
        ...data
      }
    }
  })
}

describe('Layout Test', () => {
  let wrapper;
  it('should display the layout for creating an account properly', () => {
    wrapper = mount(
      <Router>
        <Provider store={store}>
          <OpenAccountLayout />
        </Provider>
      </Router>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should display the layout for creating an account properly', () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <OpenAccountLayout />
        </Router>
      </Provider>
    );
    
    expect(wrapper.find('UserHeader')).toBeTruthy();
    expect(wrapper.find('.drop-menu')).toBeTruthy();
    expect(wrapper.find('OpenAccountForm')).toBeTruthy();
  });
  it('should display the layout for creating an account properly', () => {
    context.auth.user = {};
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <OpenAccountLayout />
        </Router>
      </Provider>
    );
    
    expect(wrapper.find('Redirect').props().to).toEqual('/login');
  });
});

describe('Form Test', () => {
  let wrapper;
  it('should display the layout for creating an account properly', () => {
    wrapper = mount(
        <Provider store={store}>
          <Form />
        </Provider>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should display the layout for creating an account properly', () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    const option = wrapper.find('select').props().children;
    
    expect(wrapper.find('form')).toBeTruthy();
    expect(wrapper.find('select')).toBeTruthy();
    expect(wrapper.find('select').props().children.length).toEqual(3);
    expect(option[0].props.children).toEqual('Choose an account type');
    expect(option[1].props.children).toEqual('Current');
    expect(option[2].props.children).toEqual('Savings');
    expect(wrapper.find('label').props().children).toEqual('Account type');
    expect(wrapper.find('button').text()).toEqual('Create');
  });
  it('should display the layout for creating an account properly', () => {
    context.account.success = 'You account has been opened';
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    
    expect(wrapper.find('.alert-success').text()).toEqual(context.account.success);
  });
});
