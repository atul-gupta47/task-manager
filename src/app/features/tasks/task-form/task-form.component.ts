import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput} from '@angular/material/input';
import {TaskService} from '../../../core/task.service';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule, MatFormField, MatInput, MatButton],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  task = { title: '', description: '', dueDate: new Date(), completed: false };
  constructor(private taskService: TaskService) {}
  onSubmit() {
    this.taskService.addTask(this.task);
    this.task = {
      title: '',
      description: '',
      dueDate: new Date(),
      completed: false,
    };
  }
}
