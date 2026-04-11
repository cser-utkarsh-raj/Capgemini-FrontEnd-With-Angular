import { Component } from '@angular/core';
import { ChildComp } from './child-comp/child-comp';

@Component({
  selector: 'app-first-comp',
  imports: [ChildComp],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  name: string = 'This is a string given by parent component';
  name2: string = 'This is another string given by parent component';

  receivedData: string = '';

  receiveData(data: string) {
    this.receivedData = data;
  }
}
