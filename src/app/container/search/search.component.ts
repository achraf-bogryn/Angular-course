import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText : string ="";


  // create event
@Output()
  searchTextContent: EventEmitter<string> = new EventEmitter<string>();

  onsearchTextChange(){
  this.searchTextContent.emit(this.searchText);
  }
  // we use this methode for One way data binding 
  // updateSerachtext(event : any){
  //  this.searchText=event.target.value;
  // }

}
