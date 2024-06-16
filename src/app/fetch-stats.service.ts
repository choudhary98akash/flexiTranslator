import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchStatsService {
  
  constructor() { }
  fetch(): { visitor: string, apiHits: string, contributions: string, loves: string } {
    // Call the API and return the following 
    return { visitor: '40', apiHits: '24', contributions: '10', loves: '112' };
}
}
