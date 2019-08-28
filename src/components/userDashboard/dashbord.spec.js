import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { mount, toJson } from '../../../test/enzyme';
import Dashboard, { fillTable } from './dashboard';

let user = {
  id: 2,
  firstname: 'Prince',
  lastname: 'mike',
  email: 'mike@email.com',
  type: 'user',
  isadmin: false,
}
const accounts = [{
  id: 1,
  accountnumber: 553373313,
  createdon: "2019-08-12T00:00:00.000Z",
  owner: 2,
  owneremail: "mike@email.com",
  type: "savings",
  status: "active",
  balance: 0,
}]
const context = {
  auth: {
    isLoading: false,
    user,
    error: ''
  },
  account: {
    success: '',
    error: '',
    accountDetails: {},
    accounts,
  }
}
const store = {
  getState: () => ({ ... context }),
  subscribe: () => ({}),
  dispatch: () => ({
    type: 'GET_ACCOUNT', 
    payload: {
      success: '',
      error: '',
      accountDetails: {},
      accounts,
      noAccount: '',
    }
  })
}

describe('Layout Test', () => {
  let wrapper;
  it('should display the layout for creating an account properly', () => {
    wrapper = mount(
      <Router>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </Router>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should display the layout for creating an account properly', () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    );
    
    expect(wrapper.find('UserHeader')).toBeTruthy();
    expect(wrapper.find('.drop-menu')).toBeTruthy();
    expect(wrapper.find('.two-third')).toBeTruthy();
  });
  it('should display the layout for creating an account properly', () => {
    context.auth.user = {};
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    );
    
    expect(wrapper.find('Redirect').props().to).toEqual('/login');
  });
  it('should display the layout for dashboard properly', () => {
    const list = fillTable(accounts, user);
    
    expect(list[0].props.children[0].type).toEqual('ul');
    expect(list[0].props.children[0].key).toEqual(`${accounts[0].accountnumber}`);
  });
});
