import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {id: '1', title: 'Task 1', description: 'Do this', dueDate: new Date(), completed: false}
  ]
  ;

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task : Task): void{
    this.tasks.push({ ...task, id: Date.now().toString() });
  }
}
