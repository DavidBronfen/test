import { ITweet } from '../models/tweet';
import * as tweetsList from '../actions/tweets-list';

export type State = ITweet[];

const initialState: State = [{
  text: '',
  user: {
    name: '',
    screen_name: '',
    profile_image_url: '',
  }
}];

export function reducer(state = initialState, action: tweetsList.Actions): State {
  switch (action.type) {
    case tweetsList.LOAD_TWEETS_LIST: {
      return initialState;
    }

    case tweetsList.LOAD_TWEETS_LIST_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
