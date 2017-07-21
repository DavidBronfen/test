import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ITweet } from '../../models/tweet';
import { TweetsListService } from '../../services/tweets-list.service';

import * as tweetsListAction from '../../actions/tweets-list';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.scss']
})
export class TweetsListComponent {

  public tweets$: Observable<ITweet[]>;
  private errorMessage: string;

  constructor(private store: Store<fromRoot.State>) {
      this.tweets$ = this.store.select(fromRoot.getTweetsListState);
  }

  // ngOnInit() {
  //   this.store.dispatch(new tweetsListAction.LoadTweetsListAction())
  // }

}
