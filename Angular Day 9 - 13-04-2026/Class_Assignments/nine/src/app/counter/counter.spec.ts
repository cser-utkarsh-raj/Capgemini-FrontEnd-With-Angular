import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;
  
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase the count',()=>{
    // component.c.incrementCount()
    // expect(component.c.count).toEqual(1);

    let h3= fixture.debugElement.query(By.css('h3'))
    let button =fixture.debugElement.queryAll(By.css('button'))
    button[0].triggerEventHandler('click')
    expect(component.c.count).toEqual(1);
    fixture.detectChanges()
    expect(h3.nativeElement.textContent).toContain('1');
    
  });
   it('should decrease the count',()=>{
    // component.c.decrementCount()
    // expect(component.c.count).toEqual(-1);
      let button =fixture.debugElement.queryAll(By.css('button'))
    button[1].triggerEventHandler('click')
    expect(component.c.count).toEqual(-1);
  });
  it('should reset the count when its clicked',()=>{
    // component.c.resetCount()
    // expect(component.c.resetCount).toEqual(0);

    let button =fixture.debugElement.queryAll(By.css('button'))

    // increasing the decsreasing
    button[0].triggerEventHandler('click')
    button[0].triggerEventHandler('click')
    button[1].triggerEventHandler('click')

    button[2].triggerEventHandler('click')

    expect(component.c.count).toEqual(0);
  });
  
});
