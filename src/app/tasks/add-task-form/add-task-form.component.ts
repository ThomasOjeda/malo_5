import { Component, EventEmitter, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent {
  newTaskName!: string;

  constructor(private ts: TasksService) {}
  handleInputChange(newValue: string) {
    this.newTaskName = newValue;
  }
  handleButtonClick() {
    this.ts.addTask(this.newTaskName);
  }
}
