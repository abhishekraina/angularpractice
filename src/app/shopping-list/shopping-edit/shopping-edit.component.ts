import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') 
  private name:ElementRef;

  @ViewChild('amountInput') 
  private amount:ElementRef;

  @Output () IngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }


  onAddItem(){
 const ingName=this.name.nativeElement.value;
 const ingAmount=this.amount.nativeElement.value;
 const newIngredient = new Ingredient(ingName,ingAmount);
 this.IngredientAdded.emit(newIngredient);
  }

  onDeleteItem(){

  }

  onClear(){}
}
