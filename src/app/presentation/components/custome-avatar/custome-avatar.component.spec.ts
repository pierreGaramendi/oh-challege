import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeAvatarComponent } from './custome-avatar.component';

describe('CustomeAvatarComponent', () => {
  let component: CustomeAvatarComponent;
  let fixture: ComponentFixture<CustomeAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomeAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
