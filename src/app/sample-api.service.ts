import { Injectable } from '@angular/core';
import axios,{ Axios } from 'axios';
import { Environment } from 'src/Environment';
@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  constructor() { }

  private apiUrl = 'https://script.google.com/macros/s/AKfycbxtn_1sujv8AQ2IXXhQYolgsCzVdwB3D4dRiQStE4UR-cuO_C18TNN-WrpdLa5kv64t/exec';

  async sendResult(text: string, targetLang: string, sourceLang: string): Promise<string|undefined> {
    const params = {
      q: text,
      target: targetLang,
      source: sourceLang
    };

    try {
      const response = await axios.get(this.apiUrl, { params });
      console.log(response.data);
      return response.data.translatedText;
    } catch (error) {
      console.error('Error translating text:', error);
      throw error;
    }
  }
}
