import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  students = [
    { name: 'Aditya', rollNo: 1, branch: 'MCA' },
    { name: 'Rohit', rollNo: 2, branch: 'IT' },
    { name: 'Sneha', rollNo: 3, branch: 'ECE' },
    { name: 'Priya', rollNo: 4, branch: 'ME' },
  ];

  displayedColumns: string[] = ['name', 'rollNo', 'branch'];
}
