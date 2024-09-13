import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNewBoardComponent } from './dropdown-new-board.component';

describe('DropdownNewBoardComponent', () => {
  let component: DropdownNewBoardComponent;
  let fixture: ComponentFixture<DropdownNewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownNewBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownNewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
