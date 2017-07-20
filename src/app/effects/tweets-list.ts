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
    .switchMap(() => this.tweetsListService.getTweets())
    .map(data => new tweetsList.LoadTweetsListSuccessAction(data));
}
