import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-list',
  templateUrl: './use-list.component.html',
  styleUrls: ['./use-list.component.scss']
})
export class UseListComponent implements OnInit {

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
