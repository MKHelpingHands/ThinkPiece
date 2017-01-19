import React from 'react';
import { searchStories } from '../../util/story_api_util';
import { searchUsers } from '../../util/user_api_util';
import SearchResults from './search_results';

import {Link} from 'react-router';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      searchResults: {},
      userSearchResults: [],
      hidden: 'hidden'
    };
    this.selectName = this.selectName.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.updateUserResults = this.updateUserResults.bind(this);
    this.clearInput = this.clearInput.bind(this);

  }

  selectName(event) {
    let name = event.currentTarget.value;
    this.setState({inputVal: name});
    if (event.currentTarget.value != "") {
      this.setState({hidden: ''})
      searchStories(event.currentTarget.value, this.updateResults)
      searchUsers(event.currentTarget.value, this.updateUserResults)
    } else {
      this.setState({hidden: 'hidden'})
    }
  }

  updateResults (data) {
    this.setState({
      searchResults: data
    })
  }

  updateUserResults (data) {
    this.setState({
      userSearchResults: data
    })
  }

  clearInput() {
    this.setState({
      inputVal: '',
      hidden: 'hidden'
    })
  }

  render() {

    let stories = this.state.searchResults
    let users = this.state.userSearchResults
    return(
      <div>
        <div className='auto'>
          <input
            onChange={this.selectName}
            value={this.state.inputVal}
            placeholder='Search Thinkpiece'/>
          <SearchResults stories={stories} users={users} clearInput={this.clearInput} hidden={this.state.hidden} />
        </div>
      </div>
    );
  }
};
