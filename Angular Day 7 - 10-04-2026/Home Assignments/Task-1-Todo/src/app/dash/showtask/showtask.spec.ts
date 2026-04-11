import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showtask } from './showtask';

describe('Showtask', () => {
  let component: Showtask;
  let fixture: ComponentFixture<Showtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showtask],
    }).compileComponents();

    fixture = TestBed.createComponent(Showtask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
