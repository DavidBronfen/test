import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TweetsListService } from '../services/tweets-list.service';
import * as tweetsList from '../actions/tweets-list';

@Injectable()
export class TweetsListEffects {
  constructor(
    private actions$: Actions,
    private tweetsListService: TweetsListService
  ) { }

  @Effect()
  loadTweetsList$: Observable<Action>= this.actions$
    .ofType(tweetsList.LOAD_TWEETS_LIST)
    .switchMap((uid) => this.tweetsListService.getTweets(uid.payload))
    .map(data => new tweetsList.LoadTweetsListSuccessAction(data));

  @Effect()
  loadMoreTweets$: Observable<Action>= this.actions$
    .ofType(tweetsList.LOAD_MORE_TWEETS)
    .switchMap((payload) => this.tweetsListService.getMoreTweets(payload.payload))
    .map(data => new tweetsList.LoadMoreTweetsSuccessAction(data));
}
