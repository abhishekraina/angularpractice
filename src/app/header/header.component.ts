import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output () visible = new EventEmitter<any>();
  display: string;
  @Input() child:string;

  constructor() { 
  }

  ngOnInit() {
  }

  changeFeature(feature:string){
    this.display=feature;
    this.visible.emit(this.display);
  }
}
