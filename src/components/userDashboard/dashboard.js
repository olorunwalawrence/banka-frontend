import React, { Component } from 'react';
import PropType from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserHeader from '../../components/header';
import { getAccount } from '../../store/actions/accounts';
import { checkLoggedUser, logout } from '../../store/actions/common';

export const fillTable = (accounts, user) => {
  return accounts.map(account => {
    return(
      <>
        <ul key={account.accountnumber} className = 'account-info'>
          <li>
            <strong>Account number</strong><br />
            <p>{account.accountnumber}</p>
          </li>
          <li><strong>Email</strong><br />
          <p>{account.owneremail}</p>
          </li>
          <li><strong>Account Name</strong><br />
          <p>{user.firstname[0].toUpperCase()}{user.firstname.slice(1).toLowerCase()} {user.lastname[0].toUpperCase()}{user.lastname.slice(1).toLowerCase()}</p>
          </li>
          <li><strong>Account Status</strong><br />
          <p className="active">{account.status}</p>
          </li>
          <li><strong>Account Type</strong><br />{account.type}</li>
          <li><strong>Account Balance</strong><br /><span>&#8358;</span>{account.balance.toFixed(2)}</li>
        </ul><br />
      </>
    );
  })
}
class Dashboard extends Component {
  componentDidMount = async () => {
    const { checkLoggedUser: loggedIn, getAccount: getAllAccount, user } = this.props
    await loggedIn();
    await getAllAccount();
  }
  render = () => {
    const { user, accounts, noAccount } = this.props;
    const page = (
      <>
        <UserHeader />
        <main className='flex'>
        <div className="one-third aside">
          <ul className="user">
            <li><Link to='/home'>Dashboard</Link></li>
            <li><Link to='/account'>Create Account</Link></li>
            <li><Link to='/' onClick={this.props.logout}>Logout</Link></li>
          </ul>
        </div>
        <div className='two-third main'>
          <>{noAccount !== '' ? <div>{noAccount}</div> : fillTable(accounts, user)}</>
        </div>
      </main>
      </>
    );
    
    return (
      !user.email ? <Redirect to='/login' /> : page
    )
  }
}

Dashboard.PropType = {
  isLoading: PropType.bool.isRequired,
  user: PropType.object.isRequired,
  noAccount: PropType.string.isRequired,
  accounts: PropType.array.isRequired,
  checkLoggedUser: PropType.func.isRequired,
  getAccount: PropType.func.isRequired,
  logout: PropType.func.isRequired,
}
const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  user: state.auth.user,
  accounts: state.account.accounts,
  noAccount: state.account.noAccount,
});
const mapDispatchToProps = {
  checkLoggedUser,
  getAccount,
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
