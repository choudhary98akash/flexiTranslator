import { Injectable } from '@angular/core';
import axios,{ Axios } from 'axios';
import { Environment } from 'src/Environment';
@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  constructor() { }

  private apiUrl = 'https://66778d95cd8f4400075e1dac--dynamic-croquembouche-427cf3.netlify.app/.netlify/functions/translate'; // Update with your Netlify function URL

  async sendResult(text: string, targetLang: string, sourceLang: string): Promise<string | undefined> {
    const params = new URLSearchParams({
      q: text,
      target: targetLang,
      source: sourceLang,
    });

    try {
      const response = await fetch(`${this.apiUrl}?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Update content type to JSON
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      return responseData.translatedText;
    } catch (error) {
      console.error('Error translating text:', error);
      throw error;
    }
  }
  
  
  
}
