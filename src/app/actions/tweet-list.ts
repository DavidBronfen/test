import { Action } from '@ngrx/store';
import { ITweet } from '../models/tweet';

export const LOAD_TWEETS_LIST =  '[TweetsList] Load TweetsList';
export const LOAD_TWEETS_LIST_SUCCESS = '[TweetsList] Load TweetsList Success';


export class LoadTweetsListAction implements Action {
  readonly type = LOAD_TWEETS_LIST;

  constructor() { }
}

export class LoadTweetsListSuccessAction implements Action {
  readonly type = LOAD_TWEETS_LIST_SUCCESS;

  constructor(public payload: ITweet[]) { }
}

export type Actions
  = LoadTweetsListAction
  | LoadTweetsListSuccessAction;
