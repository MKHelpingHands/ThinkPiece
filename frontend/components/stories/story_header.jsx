import React from 'react';
import PublishStoryModal from './publish_story_modal';
import { Link, withRouter, Router, hashHistory } from 'react-router';

class storyHeader extends React.Component {
  constructor(props) {
    super(props)
    this.deleteButton = this.deleteButton.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout()
  }

  deleteButton() {
    if (this.props.deleteStory) {
      return  (<button onClick={this.props.deleteStory}>Delete</button>)
    }
  }

  newStoryHeader() {
      return (
        <div className='header'>
          <nav>
            <Link to='/'><h3 className='logo'>Thinkpiece</h3></Link>
            <div className='header-settings'>
              <button onClick={this.handleLogout}>Logout</button>
              <PublishStoryModal submitStory={this.props.submitStory} setMainImg={this.props.setMainImg}/>
              <div>{this.deleteButton()}</div>
            </div>
          </nav>
        </div>
      );
  }

  render() {
    return this.newStoryHeader()
  }
};

export default storyHeader;
// <button onClick={this.props.submitStory}>Publish</button>
