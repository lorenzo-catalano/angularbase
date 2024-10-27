import { Injectable } from "@angular/core";
import { Pratica } from "../model/pratica";

@Injectable({
  providedIn: "root",
})
export class PraticheService {
  constructor() {}

  async search(page:number,perpage:number): Promise<any> {
    const data = await fetch(`https://dummyjson.com/users?limit=${perpage}&skip=${page*perpage}`);
    return (await data.json()) ?? [];
  }
  async get(id: number): Promise<any> {
    const data = await fetch(`https://dummyjson.com/users/${id}`);
    return (await data.json()) ?? [];
  }  
  async edit(pratica: Pratica): Promise<Pratica> {
    const data = await fetch(`https://dummyjson.com/users/${pratica.id}`, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pratica)
    });
    return (await data.json()) ?? {};
  }
}
