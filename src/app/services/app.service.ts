import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  getServices(): [] {
   return [];
  }

  getSolutions(): [] {
    return [];
   }

  getTeams(): [] {
    return [];
  }
}
