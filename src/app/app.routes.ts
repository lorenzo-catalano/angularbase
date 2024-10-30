import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { PraticheComponent } from "./pratiche/pratiche.component";
import { PraticaComponent } from "./pratica/pratica.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./service/auth.service";
import { inject } from "@angular/core";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
  {
    path: "profile",
    component: ProfileComponent,
    title: "Profile",
  },
  {
    path: "pratiche",
    component: PraticheComponent,
    title: "Pratiche",
  },
  {
    path: "pratiche/:id",
    component: PraticaComponent,
    title: "Pratica",
  },
  {
    path: "login",
    redirectTo: () => {
      const authService = inject(AuthService);
      if (authService.isAuthenticated()) {
        return `/`;
      } else {
        return `/dologin`;
      }
    }
  },
  {
    path: "dologin",
    component: LoginComponent,
    title: "Login"
  },
];
