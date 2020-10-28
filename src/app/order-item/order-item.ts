import {MealItem} from '../meal-details/meal-item';

export class OrderItem {
  constructor(meal: MealItem, quantity: any) {
    this.meal = meal;
    this.quantity = quantity;
  }
  meal: MealItem;
  quantity: number;
}
