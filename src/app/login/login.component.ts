import { Component, inject } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  
  loginService: AuthService = inject(AuthService);

  loginForm: FormGroup = new FormGroup({
    password: new FormControl('emilyspass'),
    username: new FormControl('emilys')
  });

  doLogin() {
    this.loginService.login(this.loginForm.value.username,this.loginForm.value.password)
  }

}
