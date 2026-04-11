import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView {
  @Input() students: any[] = [];
}
