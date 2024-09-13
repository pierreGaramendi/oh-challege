import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEnterDataComponent } from './signup-enter-data.component';

describe('SignupEnterDataComponent', () => {
  let component: SignupEnterDataComponent;
  let fixture: ComponentFixture<SignupEnterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupEnterDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupEnterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
