import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../services/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addtask.html',
  styleUrls: ['./addtask.css'],
})
export class AddtaskComponent {
  taskTitle = '';

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) {}

  addTask(): void {
    if (!this.taskTitle.trim()) return;

    this.todoService.addTask(this.taskTitle);
    this.taskTitle = '';

    this.router.navigate(['/dash/showtask']);
  }
}
