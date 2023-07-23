/* export interface Task {
  name: string;
  done: boolean;
} */

export class Task {
  name: string;
  done: boolean;

  constructor(n: string, d: boolean) {
    this.name = n;
    this.done = d;
  }
}
