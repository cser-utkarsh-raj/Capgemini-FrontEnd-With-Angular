import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count:number=0;
  incrementCount(){
    this.count+=1;
  }
  decrementCount(){
    this.count-=1;
  }
  resetCount(){
    this.count=0
  }
}
