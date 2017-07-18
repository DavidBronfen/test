import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users = [
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

  constructor() { }

  ngOnInit() {
  }

}
