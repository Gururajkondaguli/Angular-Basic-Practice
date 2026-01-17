import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent {

  @Input('VehicleName') public Name:string=" ";

  @Input('Company') public CompanyName:string="";

  @Output() public guruEvent=new EventEmitter();

        fire()
        {
          this.guruEvent.emit('You are a Great Guru');
        }

}
