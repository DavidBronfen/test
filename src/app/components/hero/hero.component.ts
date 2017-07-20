import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  title = 'Welcome to FED Test';
  users = ['Nir', 'David', 'Roy', 'Nir', 'David', 'Roy', 'Nir', 'David', 'Roy', 'Nir'];

  constructor() { }

  ngOnInit() {
  }

}
