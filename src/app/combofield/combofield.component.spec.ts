import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombofieldComponent } from './combofield.component';

describe('CombofieldComponent', () => {
  let component: CombofieldComponent;
  let fixture: ComponentFixture<CombofieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombofieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombofieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
