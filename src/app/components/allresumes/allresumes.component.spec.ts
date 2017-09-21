import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllresumesComponent } from './allresumes.component';

describe('AllresumesComponent', () => {
  let component: AllresumesComponent;
  let fixture: ComponentFixture<AllresumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllresumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllresumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
