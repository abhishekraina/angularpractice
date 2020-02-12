import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { Input } from '@angular/core';
//import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input()  recipe: Recipe;
RecipeArr=[];

@Output() recipeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
//     this.apiService.getRecipe().subscribe((res)=>{
//       this.RecipeArr=Object.keys(res);
//       console.log(this.RecipeArr);
// });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
  }
onSelected(){
this.recipeSelected.emit();
}
}
