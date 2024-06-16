import { Component } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private feedService : FeedService){

  }
  email  = '';
  name = '';
  description ='';
  textInput ="Reach out to us at RamanLab@gamil.com!";

  onSubmit(){
    if( this.email === '' || this.name === '' || this.description === ''){
        alert('Fields cannot be left blank');
    }
    else{
      // send the feed using service 
      this.feedService.sendFeeback(this.name,this.email,this.description);
    }

    //a service to handle the feedback requests.///////////
  }
}
