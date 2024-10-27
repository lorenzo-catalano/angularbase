import { Inject, Injectable,InjectionToken } from "@angular/core";
import { Authentication} from "../model/authentication";
import { Router } from "@angular/router";

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor( private router: Router,@Inject(BROWSER_STORAGE) public storage: Storage){

    let a = storage.getItem('auth');
    if(a){
      this.auth = JSON.parse(a);
    }

  }

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
        this.storage.setItem('auth',JSON.stringify(this.auth));
        this.router.navigate(['/profile'])
      }        
    })
  }  
}
