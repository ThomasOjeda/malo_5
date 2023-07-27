import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;

  constructor(private ar: ActivatedRoute, private ts: TasksService) {}

  ngOnInit() {
    let taskId = this.ar.snapshot.paramMap.get('task-id');
    if (taskId) this.task = this.ts.getTask(taskId as unknown as number);
  }
}
