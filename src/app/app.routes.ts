import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => import("./features/tasks/task-list/task-list.component").then(m => m.TaskListComponent),
  },
  {
    path:'auth',
    loadComponent: () => import("./features/auth/register/register.component").then(m => m.RegisterComponent),
  },
  {
    path: 'analytics',
    loadComponent: () => import("./features/analytics/dashboard/dashboard.component").then(m => m.DashboardComponent),
  },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];
