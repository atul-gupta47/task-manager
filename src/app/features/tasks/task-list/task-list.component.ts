import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {TaskCardComponent} from '../task-card/task-card.component';
import {CommonModule} from '@angular/common';
import {Task, TaskService} from '../../../core/task.service';
import {TaskFormComponent} from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule, TaskCardComponent, TaskFormComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] =[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  addTask() {
    this.taskService.addTask({title: 'New Task', description: '', dueDate: new Date(), completed: false})
  }


}
