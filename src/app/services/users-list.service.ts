import { Injectable } from '@angular/core';
import { Jsonp, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user';

@Injectable()
export class UsersListService {
  private timestamp = Date.now();
  private nonce = btoa('9YFmrKGmYJXVc4FOKQRXWRb12' + ':' + Math.round(Date.now() / 1000));
  private oauth_consumer_key = encodeURIComponent('9YFmrKGmYJXVc4FOKQRXWRb12');
  private oauth_token = encodeURIComponent('886946526618157056-tQOGwoq7d5b6qFSlr5gWxEaAfMiecxd');
  // private oauth_signature = encodeURIComponent('x5CEUSWrLTWvBELzpKW7sh53B2Y%3D');
  private oauth_token_secret = encodeURIComponent('O8bQ8Fj93TPzs89Wz4Gt9SGvGtXKREz7Z5TEUzWhlY7jr');
  private oauth_consumer_secret = encodeURIComponent('n3MU1agGWn3WxKIMiYnhF0O5qmts0kaftdWkPduq87yYVcZ2HK%3D');
  private oauth_signature = `${this.oauth_token_secret}&${this.oauth_consumer_secret}`;
  // private foo = `OAuth oauth_consumer_key="${this.oauth_consumer_key}", oauth_token="${this.oauth_token}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${this.timestamp}", oauth_nonce="${this.nonce}", oauth_version="1.0", oauth_signature="${this.oauth_signature}"`;
  private foo = `OAuth oauth_consumer_key="${this.oauth_consumer_key}", oauth_token="${this.oauth_token}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${this.timestamp}", oauth_nonce="${this.nonce}", oauth_version="1.0", oauth_signature="${this.oauth_signature}"`;


  private _usersURL = 'data/users.json';

  constructor(private _jsonp: Jsonp) { }

  getUsers(): Observable<IUser[]> {
    console.log('oauth_signature', this.oauth_signature);
    console.log('foo2', this.foo);
    const headers = new Headers();
    headers.append('Authorization', this.foo);
    const options = new RequestOptions({ headers: headers });
    console.log('headers', headers);

    return this._jsonp.get('https://api.twitter.com/1.1/users/search.json?q=Twitter%20API&page=1&count=3&callback=JSONP_CALLBACK', options)
    // return this._jsonp.get('https://api.twitter.com/1.1/users/search.json?q=Twitter%20API&page=1&count=3', options)
    .map((response: Response) => <IUser[]> response.json())
    .do(response => console.log(response))
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}
