import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterShortComponent } from './counter-short.component';

describe('CounterShortComponent', () => {
  let component: CounterShortComponent;
  let fixture: ComponentFixture<CounterShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
