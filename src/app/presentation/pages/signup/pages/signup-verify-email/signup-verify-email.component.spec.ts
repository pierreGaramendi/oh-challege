import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupVerifyEmailComponent } from './signup-verify-email.component';

describe('SignupVerifyEmailComponent', () => {
  let component: SignupVerifyEmailComponent;
  let fixture: ComponentFixture<SignupVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupVerifyEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
