import { Component, inject } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";
import { PraticheService } from "./pratiche.service";
import { Pratica } from "../pratica/pratica";
import { CommonModule } from "@angular/common";

@Component({
  imports: [CommonModule, RouterModule],
  selector: "pratiche",
  standalone: true,
  template: `<div>
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tr *ngFor="let pratica of pratiche">
        <td>{{ pratica.id }}</td>
        <td>{{ pratica.username }}</td>
        <td><a routerLink="/pratiche/{{ pratica.id }}">edit</a></td>
      </tr>
    </table>
  </div>`,
})
export class PraticheComponent {
  pratiche: Pratica[] = [];
  praticheService: PraticheService = inject(PraticheService);
  constructor() {
    this.praticheService.search().then((d) => {
      this.pratiche = d.users;
    });
  }
}
