import { Component, inject } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { RouterModule } from '@angular/router';
import { StateService } from '../service/state.service';

@Component({
  imports: [RouterModule],
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
  stateService: StateService = inject(StateService)
}
