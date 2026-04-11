import { Component, signal } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Task1-Switch');

  value: number = 0;

  next() {
    this.value++;
    if (this.value > 3) {
      this.value = 0;
    }
  }
}
