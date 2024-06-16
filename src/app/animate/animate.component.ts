import { Component , OnInit,OnDestroy,Input } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
})
export class AnimateComponent implements OnDestroy,OnInit {

  @Input() textToAnimate : string = "Hello, World!";
  @Input() customClass: string = ""; 
  animatedText = "";
  cursorVisible = true;
  direction = 1;

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = interval(300).subscribe(() => this.animateText());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  animateText() {
    if (this.direction === 1) {
      if (this.animatedText.length < this.textToAnimate.length) {
        this.animatedText += this.textToAnimate.charAt(this.animatedText.length);
      } else {
        this.direction = -1; 
      }
    } else {
      if (this.animatedText.length > 0) {
        this.animatedText = this.animatedText.slice(0, -1);
      } else {
        this.direction = 1; 
      }
    }

    this.toggleCursor();
  }

  toggleCursor() {
    this.cursorVisible = !this.cursorVisible;
  }
}
