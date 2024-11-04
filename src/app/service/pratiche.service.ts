import { Injectable, inject } from "@angular/core";
import { Pratica } from "../model/pratica";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class PraticheService {
  authService = inject(AuthService)
  async search(page:number,perpage:number): Promise<any> {
    const data = await fetch(`https://dummyjson.com/products?limit=${perpage}&skip=${page*perpage}`,{
      headers:{
        'Authorization': `Bearer ${this.authService.getAccessToken()}`
      }
    });
    return (await data.json()) ?? [];
  }
  async get(id: number): Promise<any> {
    const data = await fetch(`https://dummyjson.com/products/${id}`,{
      headers:{
        'Authorization': `Bearer ${this.authService.getAccessToken()}`
      }
    });
    return (await data.json()) ?? [];
  }  
  async edit(pratica: Pratica): Promise<Pratica> {
    const data = await fetch(`https://dummyjson.com/products/${pratica.id}`, {
      method: 'PUT', /* or PATCH */
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getAccessToken()}`
       },
      body: JSON.stringify(pratica)
    });
    return (await data.json()) ?? {};
  }
}
