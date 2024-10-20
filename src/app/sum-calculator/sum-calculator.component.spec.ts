import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumCalculatorComponent } from './sum-calculator.component';

describe('SumCalculatorComponent', () => {
  let component: SumCalculatorComponent;
  let fixture: ComponentFixture<SumCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SumCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
