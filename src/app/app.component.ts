import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AuthService } from "./service/auth.service";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterModule,CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.sass",
})
export class AppComponent {
  authService = inject(AuthService)
  title = "millenium";
}
