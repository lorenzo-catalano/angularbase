import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}

  async login(username: string,password:string): Promise<any> {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
    .then(res => res.json())
    .then(console.log);
  }  
}
