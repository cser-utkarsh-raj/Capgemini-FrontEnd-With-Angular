import { Component, inject } from '@angular/core';
import { Counter as counterservice } from '../services/counter';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter{
  c=inject(counterservice)
}
