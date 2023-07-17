import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClipboardService } from 'src/app/services/clipboard.service';
import { ShareService } from 'src/app/services/share.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() taskName: string = '';
  @Input() checked: boolean = false;
  @Input() id: number = -1;

  constructor(
    private ts: TasksService,
    private cbs: ClipboardService,
    private ss: ShareService
  ) {}

  receiveCheckedEvent($event: boolean) {
    this.ts.toggleTaskCheck(this.id, $event);
  }

  handleDeleteButtonClick() {
    this.ts.deleteTask(this.id);
  }
  handleCopyToClickboardButtonClick() {
    this.cbs.copyToClipboard(this.taskName);
  }
  handleShareButtonClick() {
    this.ss.shareText(this.taskName);
  }
}
