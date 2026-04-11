import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { ListView } from './components/list-view/list-view';
import { TableView } from './components/table-view/table-view';
import { CardView } from './components/card-view/card-view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, ListView, TableView, CardView],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  students = [
    { name: 'Aditya', rollNo: 1, branch: 'MCA' },
    { name: 'Rohit', rollNo: 2, branch: 'IT' },
    { name: 'Sneha', rollNo: 3, branch: 'ECE' },
    { name: 'Priya', rollNo: 4, branch: 'ME' },
  ];

  selectedView: string = 'list';

  showList() {
    this.selectedView = 'list';
  }

  showTable() {
    this.selectedView = 'table';
  }

  showCard() {
    this.selectedView = 'card';
  }
}
