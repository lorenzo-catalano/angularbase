import { Component, inject } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  
  loginService: AuthService = inject(AuthService);

}
