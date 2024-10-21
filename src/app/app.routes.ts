import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { PraticheComponent } from "./pratiche/pratiche.component";
import { PraticaComponent } from "./pratica/pratica.component";

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
];
