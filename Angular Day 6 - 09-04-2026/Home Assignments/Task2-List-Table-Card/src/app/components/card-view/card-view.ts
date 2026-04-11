import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-view.html',
  styleUrl: './card-view.css',
})
export class CardView {
  @Input() students: any[] = [];
}
