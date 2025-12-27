import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from "./child/child";

@Component({
  selector: 'app-demo',
  imports: [FormsModule, Child],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  message = signal('Hello From Events & Two Way Binding Demo Component!');
  onButtonClick() {
    this.message.set('Text changed programatically on button click!');
  }
  handleChildOutput(msg: string) {
    console.log('Message from Child Component:', msg);
  }

}
