import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText : string ="";
@Output()
  searchTextChange : EventEmitter<string> = new EventEmitter<string>();
 
 onSearchTextChange(){
  this.searchTextChange.emit(this.searchText);
 }
 
  // we use this methode for One way data binding 

  updateSerachtext(event : any){
   this.searchText=event.target.value;
  }

}
