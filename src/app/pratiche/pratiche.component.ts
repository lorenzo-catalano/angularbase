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
    <div>
    Page:{{page+1}}
    <a href="#">next</a>
    </div> 
  </div>`,
})
export class PraticheComponent {
  page:number=0
  perpage:number=5;
  pratiche: Pratica[] = [];
  praticheService: PraticheService = inject(PraticheService);
  constructor() {
    
  }
  

  ngOnInit() {
    this.praticheService.search(this.page,this.perpage).then((d) => {
      this.pratiche = d.users;
    });
  }
}
