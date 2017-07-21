import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private showUserList = false;
  private showTweetList = false;

  updateUserList(res) {
    console.log('res', res);
    this.showUserList = res;
  }
}
