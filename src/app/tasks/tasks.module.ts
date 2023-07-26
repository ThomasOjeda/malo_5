import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TasksComponent } from './tasks-component/tasks.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from './task/task.component';
import { TaskNameComponent } from './task/task-name/task-name.component';
import { CheckboxComponent } from './task/checkbox/checkbox.component';
import { AddTaskInputComponent } from './add-task-form/add-task-input/add-task-input.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
@NgModule({
  declarations: [
    AddTaskFormComponent,
    TasksComponent,
    ListComponent,
    TaskComponent,
    TaskNameComponent,
    CheckboxComponent,
    AddTaskInputComponent,
    UpdateTaskComponent,
    TaskDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
