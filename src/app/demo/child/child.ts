import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  output = output<string>()
  sendMessageToParent(){
    this.output.emit('Hello from Child Component!');
  }
}
