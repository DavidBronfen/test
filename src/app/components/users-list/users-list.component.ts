import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { IUser } from '../../models/user';
import { UsersListService } from '../../services/users-list.service'

import * as usersListAction from '../../actions/users-list';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users$: Observable<IUser[]>;
  private errorMessage: string;

  constructor(private store: Store<fromRoot.State>) {
      this.users$ = this.store.select(fromRoot.getUsersListState);
  }

  ngOnInit() {
    this.store.dispatch(new usersListAction.LoadUsersListAction())
  }

}
