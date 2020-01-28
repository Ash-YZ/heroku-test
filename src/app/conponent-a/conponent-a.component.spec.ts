import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConponentAComponent } from './conponent-a.component';

describe('ConponentAComponent', () => {
  let component: ConponentAComponent;
  let fixture: ComponentFixture<ConponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConponentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
