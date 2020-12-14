import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';

import{ Meal } from '../models/meals';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class MealDataService {

  constructor(private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private mealUrl = `${this.apiBaseUrl}meals/`

  public addMeal(formData: Meal): Promise<Meal> {
    console.log('Inside MealDataService#addMeal');
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('travlr-token')}`
    })
    return this.http
      .post(this.mealUrl, formData, { headers: headers }) // pass form data in request body
      .toPromise()
      .then(response => response.json() as Meal[])
      .catch(this.handleError);
  }
  
  public getMeal(name: string): Promise < Meal > {
		console.log('Inside MealDataService#getMeal(mealCode)');
		return this.http
			.get(this.mealUrl + name)
			.toPromise()
			.then(response => response.json() as Meal)
			.catch(this.handleError);
	}
  
  public getMeals(): Promise<Meal[]> {
    console.log('Inside MealDataService#getMeals');
    return this.http 
      .get(this.mealUrl)
      .toPromise()
      .then(response => response.json() as Meal[])
      .catch(this.handleError);
  }
	
	public updateMeal(formData: Meal): Promise < Meal > {
		console.log('Inside MealDataService#upateMeal');
    console.log(formData);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('travlr-token')}`
    })
    return this.http
			.put(this.mealUrl + formData.name, formData, { headers: headers })
			.toPromise()
			.then(response => response.json() as Meal[])
			.catch(this.handleError);
	}

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); //for demo purposes only
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response.json() as AuthResponse)
      .catch(this.handleError);
  } 
}
