import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PraticheService {
  constructor() {}

  async search(): Promise<any> {
    const data = await fetch("https://dummyjson.com/users");
    return (await data.json()) ?? [];
  }
  async get(id: number): Promise<any> {
    const data = await fetch(`https://dummyjson.com/users/${id}`);
    return (await data.json()) ?? [];
  }
}
