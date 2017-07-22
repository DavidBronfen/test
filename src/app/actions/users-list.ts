import { Action } from '@ngrx/store';
import { IUser } from '../models/user';

export const LOAD_USERS_LIST =  '[UsersList] Load UsersList';
export const LOAD_USERS_LIST_SUCCESS = '[UsersList] Load UsersList Success';
export const UPDATE_SELECTED_UUSER = '[UsersList] Update Selected User';


export class LoadUsersListAction implements Action {
  readonly type = LOAD_USERS_LIST;

  constructor(public payload: String) { }
}

export class LoadUsersListSuccessAction implements Action {
  readonly type = LOAD_USERS_LIST_SUCCESS;

  constructor(public payload: IUser[]) { }
}

export class UpdateSelectedUserAction implements Action {
  readonly type = UPDATE_SELECTED_UUSER;

  constructor(public payload: String) { }
}

export type Actions
  = LoadUsersListAction
  | LoadUsersListSuccessAction
  | UpdateSelectedUserAction;
