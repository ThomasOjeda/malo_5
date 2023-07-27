/* export interface Task {
  name: string;
  done: boolean;
} */

export class Task {
  name: string;
  description: string;
  creationDate: Date;
  updateDate: Date;
  done: boolean;

  constructor(name: string, description: string, done: boolean) {
    this.name = name;
    this.description = this.name + ' description';
    this.creationDate = new Date(Date.now());
    this.updateDate = this.creationDate;
    this.done = done;
  }
}
