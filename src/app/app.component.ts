import { Component, inject } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AuthService } from "./service/auth.service";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.sass",
})
export class AppComponent {
  authService = inject(AuthService)
  title = "millenium";
  router:Router;
  constructor(private r: Router ) {
    this.router = r
  }
}
