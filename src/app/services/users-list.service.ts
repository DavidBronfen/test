import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user';

@Injectable()
export class UsersListService {

  constructor() { }

  getUsers(): IUser[] {
    return [
      {
        'name': 'Nir Galon',
        'screen_name': 'nirgalon',
        'profile_image_url': 'https://api.adorable.io/avatars/285/nir.png',
      },
      {
        'name': 'David Bronfen',
        'screen_name': 'davidbronfen',
        'profile_image_url': 'https://api.adorable.io/avatars/285/david.png',
      },
      {
        'name': 'Roy Segal',
        'screen_name': 'roysegal',
        'profile_image_url': 'https://api.adorable.io/avatars/285/roy.png',
      }
    ]
  }

}
