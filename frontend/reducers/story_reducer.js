import { RECEIVE_STORY, RECEIVE_ALL_STORIES, REMOVE_STORY} from '../actions/story_actions'
import merge from 'lodash/merge';


const StoryReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_STORY:
      return merge({}, oldState, {[action.story.id]: action.story});
    case RECEIVE_ALL_STORIES:
      return merge({}, action.stories)
    case REMOVE_STORY:
      let newState = merge({}, oldState);
      delete newState[action.story.id];
      return newState
    default:
      return oldState;
  }
};

export default StoryReducer;
