import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user';

@Injectable()
export class UsersListService {

  private _usersURL = 'data/users.json';

  constructor(private _http: Http) { }

  getUsers(): Observable<IUser[]> {
    return this._http.get(this._usersURL)
    .map((response: Response) => <IUser[]> response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}

  // [
  //   {
  //     'name': 'Nir Galon',
  //     'screen_name': 'nirgalon',
  //     'profile_image_url': 'https://api.adorable.io/avatars/285/nir.png',
  //   },
  //   {
  //     'name': 'David Bronfen',
  //     'screen_name': 'davidbronfen',
  //     'profile_image_url': 'https://api.adorable.io/avatars/285/david.png',
  //   },
  //   {
  //     'name': 'Roy Segal',
  //     'screen_name': 'roysegal',
  //     'profile_image_url': 'https://api.adorable.io/avatars/285/roy.png',
  //   }
  // ]