import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MealDataService } from '../services/meal-data.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mealService: MealDataService
  ) { }

  ngOnInit() {
		// retrieve stashed mealId
		let mealCode = localStorage.getItem("mealCode");
		if (!mealCode) {
			alert("Something wrong, couldn't find where I stashed mealCode!");
				this.router.navigate(['']);
				return;
      }
      
		console.log('EditMealComponent#onInit found mealCode ' + mealCode);
    
    // initialize form
		this.editForm = this.formBuilder.group({
			_id: [],
			code: [mealCode, Validators.required],
			name: ['', Validators.required],
			length: ['', Validators.required],
			start: ['', Validators.required],
			resort: ['', Validators.required],
			perPerson: ['', Validators.required],
			image: ['', Validators.required],
			description: ['', Validators.required],
		})
    
    console.log('EditMealComponent#onInit calling MealDataService# getMeal(\'' + mealCode + '\')'); 
    
    this.mealService.getMeal(mealCode)
			.then(data => {
				console.log(data);
				// Don't use editForm.setValue() as it will throw	console error
				this.editForm.patchValue(data[0]);
			})
		}
    
    onSubmit() {
			this.submitted = true;
    
      if (this.editForm.valid) {
				this.mealService.updateMeal(this.editForm.value)
					.then(data => {
						console.log(data);
						this.router.navigate(['']);
					});
			}
		}

}
