import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-interact',
  template: `<h1>{{name1}}</h1>
  <h2>{{moviename}}</h2>

 
 
  <h2>{{name2}}</h2>
            <button (click)="fire()">Click Me</button>
  `,
  styleUrls: ['./interact.component.css']
})
export class InteractComponent {

   @Input('parentData') public name1:string=" "; 
   
   @Input(`AttuParent`) public name2:string=" ";

   @Input('India') public moviename:string=" "

   @Input('SeriesName') public FlightName:string=" ";

   @Input('Ground') public PlayerName:string=" ";








   @Output() public guruEvent=new EventEmitter();


   fire()
   {
      this.guruEvent.emit('Hey Hello from Interact Component');
   }

}
