import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropType from 'prop-types';
import { login } from '../../store/actions/auth';
import { checkLoggedUser } from '../../store/actions/common';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

class LoginForm extends Component {
  state = { 
    email: '', password: ''
  }
  componentDidMount = async () => {
    const { checkLoggedUser: loggedInUser, user} = this.props;
    await loggedInUser();
    if (user.type === 'user' || user.type === 'staff') {
      return <Redirect to='/home' />
    }
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value});
  }
  login = async event => {
    event.preventDefault();
    const { login: loginUser } = this.props;
    await loginUser({ ...this.state });
  }
  handleServerResponse = () => {
    const { user, error } = this.props;
    if (error === '' && user.firstname) {
      return <Redirect to='/home' />
    }
    if (error === '') {
      return <div></div>;
    }
    return <div className='alert alert-danger text-center'>{error}</div>;
  }
  render = () => { 
    return (
      <>
        <div className="form-card">
          <h3>LOGIN</h3>
            <>{this.props.isLoading ? <Loader type='ThreeDots' color='black' height={30} width={30} /> : null}</>
            <>{this.handleServerResponse()}</>
          <form onSubmit={this.login}>
            <div className="alert"></div>
            <label>Email</label>
            <div className="form-group">
              <input type="email" className="form-control" id="email" onChange={this.handleChange} autoComplete="off" />
            </div>
            <label>Password</label>
            <div className="form-group">
              <input type="password" className="form-control" id="password" onChange={this.handleChange} autoComplete="off" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-green" id="login">Login</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

LoginForm.PropType = {
  user: PropType.object.isRequired,
  error: PropType.string.isRequired,
  login: PropType.func.isRequired,
  checkLoggedUser: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
}
const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.error,
  isLoading: state.auth.isLoading,
});
const mapDispatchToProps = {
  login,
  checkLoggedUser,
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
