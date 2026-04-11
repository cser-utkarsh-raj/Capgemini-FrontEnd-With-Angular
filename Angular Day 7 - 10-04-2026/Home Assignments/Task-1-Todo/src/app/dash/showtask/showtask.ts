import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../services/todo';
import { Task } from '../../../types/task';

@Component({
  selector: 'app-showtask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showtask.html',
  styleUrls: ['./showtask.css'],
})
export class ShowtaskComponent {
  activeTab: 'pending' | 'finished' | 'all' = 'pending';

  constructor(public todoService: TodoService) {}

  get tasks(): Task[] {
    if (this.activeTab === 'pending') return this.todoService.getPendingTasks();
    if (this.activeTab === 'finished') return this.todoService.getFinishedTasks();
    return this.todoService.getTasks();
  }

  delete(id: number) {
    this.todoService.deleteTask(id);
  }

  markFinished(id: number) {
    this.todoService.markAsFinished(id);
  }
}
