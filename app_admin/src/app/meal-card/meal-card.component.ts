import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../models/meals';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  @Input('meal') meal: any; // meal instead of any?
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }
  
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  private editMeal(meal: Meal): void {
    console.log('Inside MealListingComponent#editMeal');
    localStorage.removeItem("mealCode");
    localStorage.setItem("mealCode", meal.name);
    this.router.navigate(['edit-meal']);
  }

}
