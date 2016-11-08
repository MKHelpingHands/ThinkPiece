import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container'
import { Link, withRouter, Router, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      buttonHidden: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  handleClick() {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  handleLogout() {
    this.props.logout()
  }

  loggedoutForm() {
      return (
        <div className='header'>
          <nav>
            <Link to='/'><h3 className='logo'>Thinkpiece</h3></Link>
            <button
              onClick={this.handleClick}
              >Sign In / Sign Up</button>

              <Modal
                className='modal'
                overlayClassName='overlay'
                isOpen={this.state.modalOpen}
                onRequestClose={this.onModalClose}
                >
                <SessionFormContainer close={this.onModalClose} />
                  <button
                    onClick={this.onModalClose}
                    className='modal-close'
                    >×</button>
              </Modal>
            </nav>
        </div>
      )
  }

  loggedInForm() {
      return (
        <div className='header'>
          <nav>
            <Link to='/'><h3 className='logo'>Thinkpiece</h3></Link>
            <div className='header-settings'>
            <Link className='medium-green-button' to='/new-story'>Write a story</Link>
            <button onClick={this.handleLogout}>Logout</button>
            </div>
          </nav>
        </div>
      )
  }

  render() {
    if (this.props.loggedIn) {
      return this.loggedInForm()
    } else {
      return this.loggedoutForm()
    }
  }
};

export default withRouter(Header);