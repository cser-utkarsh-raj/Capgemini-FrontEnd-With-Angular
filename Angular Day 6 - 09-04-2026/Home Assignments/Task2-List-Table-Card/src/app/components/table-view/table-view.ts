import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table-view.html',
  styleUrl: './table-view.css',
})
export class TableView {
  @Input() students: any[] = [];
}
