import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent} from './add-trip/add-trip.component';
import { EditTripComponent} from './edit-trip/edit-trip.component';
import { LoginComponent} from './login/login.component';
import { HomeComponent} from './home/home.component';
import { MealListingComponent } from './meal-listing/meal-listing.component';
import { AddMealComponent} from './add-meal/add-meal.component';
import { EditMealComponent} from './edit-meal/edit-meal.component';

const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent},
    { path: 'edit-trip', component: EditTripComponent},
    { path: 'add-meal', component: AddMealComponent},
    { path: 'edit-meal', component: EditMealComponent},
    { path: 'login', component: LoginComponent},
    { path: 'list-trips', component: TripListingComponent},  
    { path: 'list-meals', component: MealListingComponent},   
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }