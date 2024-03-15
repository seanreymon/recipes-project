import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;
  constructor(private slService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    // console.log("shopping list initiated")
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        // console.log('shopping list ingredients updated');
      }
    );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
    // console.log('Editing index' + index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // console.log("shopping list destroyed")
  }
}
