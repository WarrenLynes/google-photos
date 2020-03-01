import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@google-images/core-state';

@Component({
  selector: 'google-images-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private facade: AuthFacade) { }

  ngOnInit() {
  }

  auth() {
    this.facade.auth();
  }
}
