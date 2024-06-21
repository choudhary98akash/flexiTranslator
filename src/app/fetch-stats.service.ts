import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
export interface Stats {
  visitor: number;
  apiHits: number;
  loves: number;
  contributions: number;
}


@Injectable({
  providedIn: 'root'
})
export class FetchStatsService {
  
  constructor() { }
  fetch(): { visitor: number, apiHits: number, contributions: number, loves: number } {
    // Call the API and return the following 
    return { visitor: 189, apiHits:257, contributions:10, loves:881};
}
}
