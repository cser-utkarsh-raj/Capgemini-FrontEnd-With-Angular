import { TestBed } from '@angular/core/testing';

import { Math } from './math';

describe('Math', () => {
  let service: Math;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Math]
    });
    service = TestBed.inject(Math);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should subtract 2 numbers',()=>{
    let res=service.sub(10,20)
    expect (res).toEqual(-10)
  })
   it('should multiply 2 numbers',()=>{
    let res=service.mult(10,20)
    expect (res).toEqual(200)
  })
   it('should divide 2 numbers',()=>{
    let res=service.div(10,10)
    expect (res).toEqual(1)
  })
   it('should add 2 numbers',()=>{
    let res=service.add(10,20)
    expect (res).toEqual(30)
  })
});
