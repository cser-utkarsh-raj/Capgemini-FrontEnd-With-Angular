import { Injectable } from '@angular/core';
import { Task } from '../types/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private tasks: Task[] = [];
  private nextId = 1;

  addTask(title: string): void {
    this.tasks.push({
      id: this.nextId++,
      title: title.trim(),
      status: 'pending',
    });
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getPendingTasks(): Task[] {
    return this.tasks.filter((t) => t.status === 'pending');
  }

  getFinishedTasks(): Task[] {
    return this.tasks.filter((t) => t.status === 'finished');
  }

  markAsFinished(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.status = 'finished';
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
