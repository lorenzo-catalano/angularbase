import { Component, inject, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PraticheService } from "../service/pratiche.service";
import { Pratica } from "../model/pratica";
import { CommonModule } from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  selector: "pratica",
  standalone: true,
  template: `<div *ngIf="pratica">
    {{this.pratica.title}}
    <form [formGroup]="applyForm" (submit)="submitPratica()">
        <label for="first-name">Username</label>
        <input id="first-name" type="text" formControlName="title" />
        <button type="submit" class="primary">Apply now</button>
    </form>
  </div>`,
})
export class PraticaComponent {
  @Input()
  set id(praticaId: number) {
    this.praticaid = praticaId;
  }
  applyForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('')
  });
  praticaid!: number;
  pratica!: Pratica;
  praticheService: PraticheService = inject(PraticheService);

  constructor() {
    
  }
  ngOnInit() {
    this.praticheService.get(this.praticaid).then((d) => {
      this.pratica = d;
      this.applyForm.patchValue({
        id: this.pratica.id,
        title: this.pratica.title
      })
    });
  }

  submitPratica() {
    this.praticheService.edit(this.applyForm.getRawValue()).then(p=>{
      this.pratica = p;
      this.applyForm.patchValue({...this.pratica})
    });
  }
}
