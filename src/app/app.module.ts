import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SumCalculatorComponent } from './sum-calculator/sum-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SumCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Include AppRoutingModule here
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
