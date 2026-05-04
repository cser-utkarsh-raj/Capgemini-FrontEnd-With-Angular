import { TestBed } from '@angular/core/testing';

import { HttpService, ProductType } from './http-service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('HttpService', () => {
  let service: HttpService;
  let testHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService, provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(HttpService);
    testHttp = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  let expectedProducts: ProductType[]=[
    {
      id: 1,
      title: 'prod 1',
      image: 'some adress',
      price: 200

    },
    {
      id: 2,
      title: 'prod ',
      image: 'another adress',
      price: 400
    }
  ];

    afterEach(()=>{
    testHttp.verify()
  })


  it('should get products from api',()=>{
    service.getData().subscribe({
      next:(data)=>{
        expect(data).toEqual(expectedProducts)
        expect(data.length).toBe(2)
      }
    })
    const req = testHttp.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET')

     req.flush(expectedProducts); 

});
});
