import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

import { IUser } from '../../models/user';
import { UsersListService } from '../../services/users-list.service';

import * as usersListAction from '../../actions/users-list';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  title = 'Welcome to FED Test';
  public users$: Observable<IUser[]>;
  private errorMessage: string;
  private keyWord: String;
  private firstNameControl = new FormControl();

  constructor(private store: Store<fromRoot.State>) {
    this.users$ = this.store.select(fromRoot.getUsersListState);
  }

  searchUsers() {
    // this.firstNameControl.valueChanges
    //   .debounceTime(250)
    //   .subscribe(newValue => this.keyWord = newValue);
    this.firstNameControl.valueChanges
    .debounceTime(1000)
    .map(newValue => {
      this.keyWord = newValue;
      return this.dispatchUsers(name);
    })
  }

  dispatchUsers(searchKey) {
    console.log(searchKey);
    this.store.dispatch(new usersListAction.LoadUsersListAction(searchKey));
  }

  displayUsers(event) {
    console.log(event);
  }

}
