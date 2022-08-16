import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoPath = '/assets/img/flower-logo.jpg';

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
