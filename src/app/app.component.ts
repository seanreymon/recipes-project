import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // title = 'recipes-project';
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    // console.log('autoLogin');
    this.authService.autoLogin();
  }
}
