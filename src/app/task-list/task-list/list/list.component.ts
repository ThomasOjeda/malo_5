import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private ts: TasksService) {}
  ngOnInit(): void {
    this.taskList = this.ts.getTasks();
  }
}
