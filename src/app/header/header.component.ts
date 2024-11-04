import { Component, inject } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { StateService } from '../service/state.service';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule,RouterModule],
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

  notificationOpen:boolean = false
  messagesOpen:boolean = false
  profileOpen:boolean = false
  toggleNotification(){
    this.notificationOpen=!this.notificationOpen
    this.messagesOpen = false
    this.profileOpen = false
  }
  toggleProfile(){
    this.profileOpen=!this.profileOpen
    this.notificationOpen= false
    this.messagesOpen = false
  }
  toggleMessages(){
    this.messagesOpen=!this.messagesOpen
    this.profileOpen=false
    this.notificationOpen= false
  }
  
  authService: AuthService = inject(AuthService)
  stateService: StateService = inject(StateService)

}
