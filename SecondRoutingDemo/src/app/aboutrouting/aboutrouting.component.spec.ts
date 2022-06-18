import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutroutingComponent } from './aboutrouting.component';

describe('AboutroutingComponent', () => {
  let component: AboutroutingComponent;
  let fixture: ComponentFixture<AboutroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutroutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
