import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProjectsComponent } from './grid-projects.component';

describe('GridProjectsComponent', () => {
  let component: GridProjectsComponent;
  let fixture: ComponentFixture<GridProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
