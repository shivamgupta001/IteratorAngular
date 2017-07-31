import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxfieldComponent } from './checkboxfield.component';

describe('CheckboxfieldComponent', () => {
  let component: CheckboxfieldComponent;
  let fixture: ComponentFixture<CheckboxfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
