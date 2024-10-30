import { Inject, Injectable,InjectionToken } from "@angular/core";
import { Authentication} from "../model/authentication";
import { Router } from "@angular/router";

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => window.localStorage
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
    return !!this.auth && !this.isExpired();
  }
  getAccessToken():string{
    if(this.isExpired()){
      this.refresh()
    }
    return this.auth.accessToken;
  }
  isExpired(){
    return this.auth && new Date() > this.auth.expiration;
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
        this.auth.expiration = new Date(new Date().getTime()+25*60000)
        this.storage.setItem('auth',JSON.stringify(this.auth));
        this.router.navigate(['/profile'])
      }        
    })
  }  
  refresh(): any {
    fetch('https://dummyjson.com/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        refreshToken: this.auth.refreshToken,
        expiresInMins: 30
      })
    })
    .then(res => res.json())
    .then(u=>{
      if(u.accessToken){
        this.auth = u;
        this.auth.expiration = new Date(new Date().getTime()+25*60000)
        this.storage.setItem('auth',JSON.stringify(this.auth));
        return;
      }        
    })
  }  
}
