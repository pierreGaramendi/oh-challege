import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWorkspacesComponent } from './dropdown-workspaces.component';

describe('DropdownWorkspacesComponent', () => {
  let component: DropdownWorkspacesComponent;
  let fixture: ComponentFixture<DropdownWorkspacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownWorkspacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownWorkspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
