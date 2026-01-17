import { Component } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `<h1>
    Hello {{name.toUpperCase()}}
  </h1>
 <h1>
     {{"Hello" + name.toUpperCase()}}
  </h1>
  
  siteUrl:{{" " + siteUrl}}

  <input [id]="name" type="text" value="Gururaj"/>
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Gururaj"/>
  <h1 [class]={text}> I am A Red</h1>

  <h2 [ngClass]="messageClasses">CodeEvolution-success and Danger</h2>

  <h1 [style.color]="!hasError ? 'red' : 'green'">Color Effects</h1>
  
  <button (click)="onclick($event)">Click Me</button>
  greeting: {{greeting}}  


<input  #guru [id]="name" type="text"  />
  <button (click)="logmessage(guru.value)">Click Me</button>  

    <input  [(ngModel)]="name" type="text"  />
  {{name}}




  <h1 *ngIf="sirname"; else elseblock>Welcome {{name}}</h1>

  <ng-template #elseblock>
    <h1>Welcome {{name}}</h1>
  </ng-template> 

       <div [ngSwitch]="color">
        <h1 *ngSwitchCase="'red'">You Picked Red</h1>
        <h1 *ngSwitchCase="'blue'">You Picked Blue</h1>
        <h1 *ngSwitchCase="'green'">You Picked Green</h1>
        <h1 *ngSwitchDefault>Default</h1>
      </div> 

      <div *ngFor="let color of color; last as i">
        <h1>{{i}} Hi Its {{color}}</h1>
      </div>

  `,
  styles: [`
      .text-success {
      color: green;
      }
      .text-danger {
      color: red;
      }
      .text-special {
      font-style: italic;
      }`]
})




export class TestComponent {


  public color=['red','blue','green','yellow'];
  // public color="blue";
  public name="Gururaj";
  public sirname=true;

  // public Firstname=false;

  public siteUrl=window.location.href;
  public myId="testId";
  public isDisabled=false;
  public text=false;

  public hasError=false;
  public isSpecial=true;


  public messageClasses={
    'text-success':!this.hasError,
    'text-danger':this.hasError,
    'text-special':this.isSpecial
  };


  public greeting="";

  onclick(event:any)
  {
    console.log(event);
     this.greeting=event.type;
  }

  logmessage(value:string)
  {
    console.log(value);
  }


}
