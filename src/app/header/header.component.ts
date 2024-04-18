import { Component } from "@angular/core";
// we use this symbole (@component) to convert typescript class to component class
@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
//  simple typescript class not component class
 export class HeaderComponent{}