import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overdue'
})
export class OverduePipe implements PipeTransform {

  transform(dueDate: Date): string {
    return new Date(dueDate) < new Date() ? 'Overdue' : 'On Time';
  }
}
