import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sum-calculator',
  templateUrl: './sum-calculator.component.html',
  styleUrls: ['./sum-calculator.component.css']
})
export class SumCalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  resultMessage: string = '';

  constructor(private http: HttpClient) {}

  calculateSum() {
    const data = {
      num1: this.num1,
      num2: this.num2
    };

    this.http.post<any>('https://zayan.azurewebsites.net/api/generatesum?code=nKS2reUgrpcIpI7qfSkFyWdQZTuWLkL2oVHadgyw0Fb4AzFurWw23A%3D%3D', data).subscribe({
      next: (response) => {
        this.resultMessage = `The sum is: ${response.sum}`;
      },
      error: (error) => {
        this.resultMessage = 'Error: Unable to calculate the sum.';
      }
    });
  }
}
