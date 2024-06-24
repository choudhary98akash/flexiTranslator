import { Component } from '@angular/core';
import { SendFeedbackService } from '../send-feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private sendfeedbackservice : SendFeedbackService){

  }
  email  = '';
  name = '';
  description ='';
  textInput ="Reach out to us at RamanLab@gamil.com!";

  async onSubmit(){
    if( this.email === '' || this.name === '' || this.description === ''){
        alert('Fields cannot be left blank');
    }
    else{
       const response = await this.sendfeedbackservice.sendFeedback(this.name,this.email,this.description);
       if(response === undefined){
        alert('Failed to send feedback, Please try again later');
       }
       else{
        alert('Feedback has been sent.')
       }
    }
  }
}
