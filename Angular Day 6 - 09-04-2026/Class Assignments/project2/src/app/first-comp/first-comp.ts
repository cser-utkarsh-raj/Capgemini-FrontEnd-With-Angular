import { Component, inject, OnInit } from '@angular/core';
import { Test } from '../services/test';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp implements OnInit {
  test = inject(Test);

  namesArr: string[] = this.test.namesArr;

  addName(name: string) {
    this.namesArr.push(name);
  }

  ngOnInit() {
    this.test.namesArr = this.namesArr;
  }
}
