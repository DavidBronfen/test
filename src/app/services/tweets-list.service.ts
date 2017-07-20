import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ITweet } from '../models/tweet';

@Injectable()
export class TweetsListService {

  private _tweetsURL = 'data/tweets.json';

  constructor(private _http: Http) { }

  getTweets(): Observable<ITweet[]> {
    return this._http.get(this._tweetsURL)
    .map((response: Response) => <ITweet[]> response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}
