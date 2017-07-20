import { Action } from '@ngrx/store';
import { ITweet } from '../models/tweet';

export const LOAD_TWEETS_LIST =  '[TweetsList] Load TweetsList';
export const LOAD_TWEETS_LIST_SUCCESS = '[TweetsList] Load TweetsList Success';


export class LoadUsersListAction implements Action {
  readonly type = LOAD_TWEETS_LIST;

  constructor() { }
}

export class LoadUsersListSuccessAction implements Action {
  readonly type = LOAD_TWEETS_LIST_SUCCESS;

  constructor(public payload: IUser[]) { }
}

export type Actions
  = LoadUsersListAction
  | LoadUsersListSuccessAction;
