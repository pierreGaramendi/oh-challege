import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeDorpdownComponent } from './custome-dorpdown.component';

describe('CustomeDorpdownComponent', () => {
  let component: CustomeDorpdownComponent;
  let fixture: ComponentFixture<CustomeDorpdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeDorpdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomeDorpdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
