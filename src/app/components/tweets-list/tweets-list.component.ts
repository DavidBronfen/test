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
export class TweetsListComponent implements OnInit {

  public tweets$: Observable<ITweet[]>;
  private errorMessage: string;

  constructor(private store: Store<fromRoot.State>) {
      this.tweets$ = this.store.select(fromRoot.getTweetsListState);
  }

  ngOnInit() {
    this.store.dispatch(new tweetsListAction.LoadTweetsListAction())
  }

}

// [
//   {
//     'name': 'Nir Galon',
//     'screen_name': 'nirgalon',
//     'profile_image_url': 'https://api.adorable.io/avatars/285/nir.png',
//     'text': 'I\'ve had these jeans since I was born And now they\'re ripped and now they\'re torn And all my friends have skateboards'
//   },
//   {
//     'name': 'Nir Galon',
//     'screen_name': 'nirgalon',
//     'profile_image_url': '',
//     'text': 'I want the toys of other boys I want a knife and a gun and things But Mum and Dad will not give in'
//   },
//   {
//     'name': 'Nir Galon',
//     'screen_name': 'nirgalon',
//     'profile_image_url': 'https://api.adorable.io/avatars/285/nir.png',
//     'text': 'And now I know just what it is It\'s got disease and it\'s got my head It always runs where I hide'
//   },
// ]
