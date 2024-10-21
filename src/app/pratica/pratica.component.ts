import { Component, inject, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PraticheService } from "../pratiche/pratiche.service";
import { Pratica } from "../pratica/pratica";
import { CommonModule } from "@angular/common";

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: "pratica",
  standalone: true,
  template: `<div>
    {{ pratica.username }}
  </div>`,
})
export class PraticaComponent {
  @Input()
  set id(praticaId: number) {
    debugger;
    this.praticaid = praticaId;
  }
  praticaid!: number;
  pratica!: Pratica;
  praticheService: PraticheService = inject(PraticheService);
  constructor() {
    debugger;
    this.praticheService.get(this.praticaid).then((d) => {
      this.pratica = d;
    });
  }
}
