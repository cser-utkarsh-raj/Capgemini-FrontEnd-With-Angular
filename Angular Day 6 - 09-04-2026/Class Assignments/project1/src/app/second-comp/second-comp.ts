import { Component } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-second-comp',
  imports: [NgClass, NgStyle, NgIf, NgFor],
  templateUrl: './second-comp.html',
  styleUrl: './second-comp.css',
})
export class SecondComp {
  applyClass: boolean = true;
  shouldApply() {
    this.applyClass = !this.applyClass;
  }
  arr: number[] = [1, 2, 3, 4, 5];
}
