import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UsersListService } from '../services/users-list.service';
import * as usersList from '../actions/users-list';

@Injectable()
export class UsersListEffects {
  constructor(
    private actions$: Actions,
    private usersListService: UsersListService
  ) { }

  @Effect()
  loadUsersList$: Observable<Action>= this.actions$
    .ofType(usersList.LOAD_USERS_LIST)
    .switchMap((keyWord) => this.usersListService.getUsers(keyWord.payload))
    .map(data => new usersList.LoadUsersListSuccessAction(data));
}
