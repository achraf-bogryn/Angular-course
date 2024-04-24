import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input()
All : number = 0;
@Input()
inStock : number = 0;
@Input()
outStock : number = 0; 
@Output() 
selectFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>()  ;

selectFilterRadioButton : string = 'all';
onSelectedFilterRadioButtonChange(){
// console.log("selectFilterRadioButtonChanged is event ");
this.selectFilterRadioButtonChanged.emit(this.selectFilterRadioButton);
}

}
