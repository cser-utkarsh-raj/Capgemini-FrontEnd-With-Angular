import { TestBed } from '@angular/core/testing';

import { Counter } from './counter';

describe('Counter', () => {
  let service: Counter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase count',()=>{
    service.incrementCount()
    expect(service.count).toEqual(1)
  })
  it('should increase count',()=>{
    service.decrementCount()
    expect(service.count).toEqual(-1)
  })
  it('should increase count',()=>{
    service.resetCount()
    expect(service.count).toEqual(0)
  })
});
