import { IUser } from '../models/user';
import * as usersList from '../actions/users-list';

export type State = IUser[];

const initialState: State = [{
  name: '',
  screen_name: '',
  profile_image_url: '',
}];

export function reducer(state = initialState, action: usersList.Actions): State {
  switch (action.type) {
    case usersList.LOAD_USERS_LIST: {
      return initialState;
    }

    case usersList.LOAD_USERS_LIST_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
