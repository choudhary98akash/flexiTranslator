import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  sendFeeback(name: string, email: string, description: string) {
    //post api for feed or mail service
    console.log('The feed send api to store or mail the same to desired contact with details '+name+ ' : '+' : '+email+' : '+description);
  }

  constructor() { }
}
