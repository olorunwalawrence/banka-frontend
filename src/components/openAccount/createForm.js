import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { openAccount } from '../../store/actions/accounts.js';
class OpenAccountForm extends Component {
  state = { type: '' }
  change = event => {
    this.setState({ type: event.target.value });
  }
  openAccount = async event => {
    event.preventDefault();
    await this.props.openAccount({ ...this.state });
  }
  handleError = () => {
    if(this.props.error !== '') {
      return <div className="alert alert-danger">{this.props.error}</div>
    } else if(this.props.success !== ''){
      return <div className='alert alert-success'>{this.props.success}</div>
    } else {
      return <div></div>
    }
  }
  render() {
    return ( 
      <>
        <div className="form sm-grid">
          <div className="container x">
            <div className="dialog m"></div>
            <div className="form-card">
              <h2>Open Account</h2>
              <>{this.props.isLoading ? <Loader type='ThreeDots' color='black' height={30} width={30} /> : null}</>
              <>{this.handleError()}</>
              <form onSubmit={this.openAccount}>
                <label>Account type</label>
                <div className="form-group">
                  < select id = "select"
                    className = "select"
                    defaultValue = 'Choose an account type'
                    onChange={this.change}
                  >
                    <option disabled>Choose an account type</option>
                    <option value="current">Current</option>
                    <option value="savings">Savings</option>
                  </select>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-green" id="createAccount">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

OpenAccountForm.propTypes = {
  account: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  success: PropTypes.string.isRequired,
  openAccount: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}
const mapToProps = state => ({
  account: state.account.accountDetails,
  error: state.account.error,
  success: state.account.success,
  isLoading: state.auth.isLoading,
});
const mapToDispatch = {
  openAccount,
}
export default connect(mapToProps, mapToDispatch)(OpenAccountForm);