import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SendFeedbackService {

  constructor() { 

  }

  private apiUrl = 'https://dynamic-croquembouche-427cf3.netlify.app/.netlify/functions/sendFeedback';

  async sendFeedback(name : string , email : string, description : string) :Promise<string|undefined>{
    const params =  new URLSearchParams({
      name : name,
      email : email,
      description : description
    })
    try {
      const response =await  axios.get(`${this.apiUrl}?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error ',error);
      return undefined;
    }
  }
}
