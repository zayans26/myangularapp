import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SumCalculatorComponent } from './sum-calculator/sum-calculator.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route for your existing page
  { path: 'sum-calculator', component: SumCalculatorComponent }, // New route for the sum calculator page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
