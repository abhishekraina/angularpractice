import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parent='abc';
  toggle='recipe';
  title = 'my-first-app';
  
  constructor(){
 
  }
 pageToggle(toggle){
    this.toggle=toggle;
   
 }


  
}
