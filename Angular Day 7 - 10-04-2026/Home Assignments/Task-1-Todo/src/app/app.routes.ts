import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash';
import { AddtaskComponent } from './dash/addtask/addtask';
import { ShowtaskComponent } from './dash/showtask/showtask';

export const routes: Routes = [
  {
    path: 'dash',
    component: DashComponent,
    children: [
      { path: 'addtask', component: AddtaskComponent },
      { path: 'showtask', component: ShowtaskComponent },
      { path: '', redirectTo: 'addtask', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
];
