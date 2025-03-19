import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-priority-selector',
  imports: [MatSelectModule],
  templateUrl: './priority-selector.component.html',
  styleUrl: './priority-selector.component.scss',
})
export class PrioritySelectorComponent {
  @Input() priority = 'medium';
  @Output() priorityChange = new EventEmitter<string>();
}
