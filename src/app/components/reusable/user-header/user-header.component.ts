import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent implements OnInit {
  @Input() canLogout!: boolean;
  logoPath = '/assets/img/flower-logo.jpg';

  constructor(public router: Router, private authService: AuthService) {}

  onClickLogout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
