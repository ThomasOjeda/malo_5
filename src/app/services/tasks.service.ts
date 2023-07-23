import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskList: Task[];
  constructor(private ls: LocalStorageService) {
    let storedTasksList = this.ls.getItem('tasks');
    if (storedTasksList !== null) this.taskList = JSON.parse(storedTasksList);
    else this.taskList = [];
  }

  getTasks() {
    return this.taskList;
  }

  addTask(task: string) {
    task = task.trim();
    if (task.length !== 0) this.taskList.unshift({ name: task, done: false });

    this.saveChanges();
  }

  deleteTask(taskIndex: number) {
    this.taskList.splice(taskIndex, 1);

    this.saveChanges();
  }

  toggleTaskCheck(taskIndex: number, state: boolean) {
    this.taskList[taskIndex].done = state;

    this.saveChanges();
  }

  private saveChanges() {
    this.ls.setItem('tasks', JSON.stringify(this.taskList));

    console.log(JSON.stringify(this.taskList));
  }
}
