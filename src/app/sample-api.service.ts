import { Injectable } from '@angular/core';
import axios,{ Axios } from 'axios';
import { Environment } from 'src/Environment';
@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  private apiUrl = 'https://66778d95cd8f4400075e1dac--dynamic-croquembouche-427cf3.netlify.app/.netlify/functions/translate'; // Update with your Netlify function URL

  async sendResult(text: string, targetLang: string, sourceLang: string): Promise<string | undefined> {
    const params = new URLSearchParams({
      q: text,
      target: targetLang,
      source: sourceLang,
    });

    try {
      const response = await axios.get(`${this.apiUrl}?${params.toString()}`);
      console.log(response.data, 'Response from API in JSON');
      return response.data.translatedText;
    } catch (error) {
      console.error('Error translating text:', error);
      throw error;
    }
  }
}
