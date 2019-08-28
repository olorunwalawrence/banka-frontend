import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from './enzyme';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';
import Routes from '../src/routes/appRoutes';
import UserHeader, { Header, drop } from '../src/components/header';
import { LandingPage, SignupPage, UserHomepage, LoginPage, OpenAccountPage } from '../src/pages';

describe('App', () => {
  it('should render the App component correctly', () => {
    const shallowWrapper = shallow(<App />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});

describe('Routes', () => {
  it('should render the routes for the application correctly', () => {
    const shallowWrapper = shallow(<Routes />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});

describe('Header', () => {
  it('should render the header for the application correctly', () => {
    const shallowWrapper = shallow(<Header />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
  it('should hide the div with className .drop-menu on button click', () => {
    const wrapper = mount(<Provider store={store}><Router><UserHeader /></Router></Provider>);

    expect(toJson(wrapper)).toMatchSnapshot();
  })
});

describe('Landing page', () => {
  it('shoul render the landing page for the application correctly', () => {
    const shallowWrapper = shallow(<LandingPage />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});

describe('Signup page', () => {
  it('shoul render the landing page for the application correctly', () => {
    const shallowWrapper = shallow(<App><SignupPage /></App>);
    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
  it('should contain the display of the completed component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <SignupPage />
        </Router>
      </Provider>
    );
    
    expect(wrapper.find('SignupLayout')).toBeTruthy();
    expect(wrapper.find('header')).toBeTruthy();
    expect(wrapper.find('.back')).toBeTruthy();
    expect(wrapper.find('.grid')).toBeTruthy();
  })
});

describe('Login page', () => {
  it('shoul render the landing page for the application correctly', () => {
    const shallowWrapper = shallow(<App><LoginPage /></App>);
    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
  it('should contain the display of the completed component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <LoginPage />
        </Router>
      </Provider>
    );
    
    expect(wrapper.find('SignupLayout')).toBeTruthy();
    expect(wrapper.find('header')).toBeTruthy();
    expect(wrapper.find('.back')).toBeTruthy();
    expect(wrapper.find('.grid')).toBeTruthy();
  })
});

describe('UserHomePage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <UserHomepage />
        </Router>
      </Provider>
    )
  });
  it('should contain a header and h1', () => {
    expect(wrapper.find('UserHeader')).toBeTruthy();
    expect(wrapper.find('Dashboard')).toBeTruthy();
  });
});

describe('OenAccountPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <OpenAccountPage />
        </Router>
      </Provider>
    )
  });
  it('should contain a header and h1', () => {
    expect(wrapper.find('UserHeader')).toBeTruthy();
    expect(wrapper.find('Layout')).toBeTruthy();
  });
});
