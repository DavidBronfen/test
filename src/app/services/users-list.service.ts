import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user';

@Injectable()
export class UsersListService {

  private _usersURL = 'data/users.json';

  constructor(private _jsonp: Jsonp) { }

  getUsers(): Observable<IUser[]> {
    return this._jsonp.get('https://api.twitter.com/1.1/users/search.json?q=Twitter%20API&page=1&count=3')
    .map((response: Response) => <IUser[]> response.json())
    .do(response => console.log(response))
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}
