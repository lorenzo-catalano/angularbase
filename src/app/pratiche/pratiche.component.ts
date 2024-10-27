import { Component, inject } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";
import { PraticheService } from "../service/pratiche.service";
import { Pratica } from "../model/pratica";
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
    <span href="#" (click)="prevPage()" *ngIf="page > 0">prev</span>
    Page:{{page+1}}
    <span href="#" (click)="nextPage()" *ngIf="page > -1">next</span>
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
  prevPage(){
    this.page-=1;
    this.loadPage()
  }
  nextPage(){
    this.page+=1;
    this.loadPage()
  }
  loadPage(){
    this.praticheService.search(this.page,this.perpage).then((d) => {
      this.pratiche = d.users;
    });
  }
  

  ngOnInit() {
    this.loadPage()
  }
}
