import {Component, Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {OverduePipe} from '../../../shared/overdue.pipe';
import {DatePipe} from '@angular/common';
import {
  PrioritySelectorComponent
} from '../../../shared/priority-selector/priority-selector.component';

@Component({
  selector: 'app-task-card',
  imports: [
    MatCardModule,
    MatCheckboxModule,
    FormsModule, OverduePipe, DatePipe, PrioritySelectorComponent
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() title=  'Untitled Task';
  @Input() description=  '';
  @Input() priority = 'medium';
  @Input() dueDate = new Date();
  completed = false;

}
