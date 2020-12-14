import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from './services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './services/authentication.service';
import { MealListingComponent } from './meal-listing/meal-listing.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    MealListingComponent,
    MealCardComponent,
    AddMealComponent,
    EditMealComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TripDataService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
