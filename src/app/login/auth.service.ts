import { Inject, Injectable } from "@angular/core";
import { Authentication} from "./authentication";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor( private router: Router ){}
  auth!:Authentication

  isAuthenticated():boolean{
    return !!this.auth;
  }

  async login(username: string,password:string): Promise<any> {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30,
      })
    })
    .then(res => res.json())
    .then(u=>{
      if(u.accessToken){
        this.auth = u;
        this.router.navigate(['/profile'])
      }        
    })
  }  
}
