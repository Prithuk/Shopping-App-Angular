import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is a first test',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9'),
    new Recipe('Momo', 'This is a test',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9')

  ];
  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
