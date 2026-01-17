import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  template: `<div>
    <h1>Counter App</h1>
    <button (click)="increment()">Increment</button>
    <p>Current Count: {{ count }}</p>

    <button (click)="decrement()">Decrement</button>
   

    <button (click)="count = 0">Reset</button>
     
  </div>`,
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  public count:number=0;
  increment()
  {
    this.count = (this.count) + 1
  }

  decrement()
  {
    this.count=(this.count)-1
  }

}
