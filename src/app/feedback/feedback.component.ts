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
  submitButton = 'Submit';

  async onSubmit() {
    this.submitButton = "Sending Feedback.....";
    // Simple regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Simple regex for name validation (only allows letters and spaces)
    const namePattern = /^[a-zA-Z\s]+$/;
    
    if (this.email === '' || this.name === '' || this.description === '') {
      alert('Fields cannot be left blank');
    } else if (!emailPattern.test(this.email)) {
        alert('Please enter a valid email address');
    } else if (!namePattern.test(this.name)) {
      alert('Name can only contain letters and spaces');
    } else {
        const response = await this.sendfeedbackservice.sendFeedback(this.name, this.email, this.description);
        if (response === undefined) {
            alert('Failed to send feedback, Please try again later');
          } else {
            alert('Feedback has been sent.');
          }
          this.email = '';
          this.name = '';
          this.description = '';
        }   
        this.submitButton = "Submit";
  }
}
