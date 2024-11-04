import { Component, inject } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AuthService } from "./service/auth.service";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { StateService } from "./service/state.service";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.sass",
})
export class AppComponent {
  authService = inject(AuthService)
  title = "millenium";
  router:Router;
  stateService:StateService
  constructor(private r: Router ,private s:StateService) {
    this.router = r
    this.stateService = s
  }
}
