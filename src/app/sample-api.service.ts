import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  constructor() { }

  sendResult(source : string,target : string) : string{
    //calling of the api done here.
    const translatedText = 'This is the service suppose to bring the output didn;t work out i guess with source lang '+source+' and the target language is '+target;
    return translatedText;
  }
}
