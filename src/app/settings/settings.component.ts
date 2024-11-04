import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "settings",
  standalone: true,
  templateUrl: "./settings.component.html",
})
export class SettingsComponent {

  user:any = {};
  authService: AuthService = inject(AuthService);

  ngOnInit() {
    /* providing access token in bearer */
    fetch('https://dummyjson.com/user/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.authService.getAccessToken()}`, // Pass JWT via Authorization header
      }
    })
    .then(res => res.json())
    .then(j=>this.user = j);
  }

}
