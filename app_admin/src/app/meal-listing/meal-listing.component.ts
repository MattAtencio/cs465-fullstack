import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { meals } from '../data/meals';
import { MealDataService } from '../services/meal-data.service';
import { Meal} from '../models/meals';
import { AuthenticationService } from '../services/authentication.service';


@Component({
	selector: 'app-meal-listing',
	templateUrl: './meal-listing.component.html',
	styleUrls: ['./meal-listing.component.css'],
	providers: [MealDataService]
})
export class MealListingComponent implements OnInit {
	
	// meals: Array<any> = meals;
	meals: Meal[];
  
    message: string;
  
    constructor(
		private mealDataService: MealDataService,
		private authenticationService: AuthenticationService,
    	private router: Router
  	) { }

	private addMeal(): void {
		console.log('Inside MealListingComponent#addMeal');
		this.router.navigate(['add-meal']);
	}
  
  	private getMeals(): void {
		console.log('Inside MealListingComponent#getMeals');
		this.message = 'Searching for meals';
		this.mealDataService
			.getMeals()
			.then(foundMeals => {
				this.message = foundMeals.length > 0 ? '' :
					'No meals found';
				this.meals = foundMeals;
			});
	}

	public isLoggedIn(): boolean {
		return this.authenticationService.isLoggedIn();
	}
  
  ngOnInit(): void {
		this.getMeals();
	}
}
