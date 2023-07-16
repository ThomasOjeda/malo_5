import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ListComponent } from './task-list/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from './task-list/task/task.component';
import { TaskNameComponent } from './task-list/task/task-name/task-name.component';
import { CheckboxComponent } from './task-list/task/checkbox/checkbox.component';
import { AddTaskInputComponent } from './add-task-form/add-task-input/add-task-input.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddTaskFormComponent,
    TaskListComponent,
    ListComponent,
    TaskComponent,
    TaskNameComponent,
    CheckboxComponent,
    AddTaskInputComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TaskListComponent],
})
export class TaskListModule {}
