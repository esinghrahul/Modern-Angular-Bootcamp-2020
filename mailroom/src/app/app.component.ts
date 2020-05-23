import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mailroom';
  signedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.signedIn$.subscribe((signInToken) => {
      this.signedIn = signInToken;
    });
    this.authService.checkAuth().subscribe(() => {});
  }
}
