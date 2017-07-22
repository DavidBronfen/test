import { IUser } from '../models/user';
import * as usersList from '../actions/users-list';

export type State = {
  users: IUser[];
  selectedUser: String;
}
const initialState: State = {
  users: [{
    name: '',
    screen_name: '',
    profile_image_url: '',
  }],
  selectedUser: '',
};

export function reducer(state = initialState, action: usersList.Actions): State {
  switch (action.type) {
    case usersList.LOAD_USERS_LIST: {
      return initialState;
    }

    case usersList.LOAD_USERS_LIST_SUCCESS: {
      const newState = { users: action.payload };

      return {
        ...state,
        ...newState,
      };
    }

    case usersList.UPDATE_SELECTED_UUSER: {
      const newState = { selectedUser: action.payload };

      return {
        ...state,
        ...newState,
      };
    }

    default: {
      return state;
    }
  }
}
