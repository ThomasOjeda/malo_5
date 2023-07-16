import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() checked: boolean = false;
  @Input() id: number = -1;

  constructor(private ts: TasksService) {}

  receiveCheckedEvent($event: boolean) {
    this.ts.toggleTaskCheck(this.id, $event);
  }

  handleDeleteButtonClick() {
    this.ts.deleteTask(this.id);
  }
}
