import { Component } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    username: new FormControl('')
  });

  doLogin() {
    console.log(this.loginForm.value)
  }

}
