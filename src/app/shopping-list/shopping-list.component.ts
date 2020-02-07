import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[
  new Ingredient('Orange',12),
  new Ingredient("Tomato",14)
];
  constructor() { }

  ngOnInit() {
  }

}
