import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRecentWorkspaceComponent } from './dropdown-recent-workspace.component';

describe('DropdownRecentWorkspaceComponent', () => {
  let component: DropdownRecentWorkspaceComponent;
  let fixture: ComponentFixture<DropdownRecentWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownRecentWorkspaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownRecentWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
