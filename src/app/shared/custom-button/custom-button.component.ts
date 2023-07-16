import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Output() clickedButtonEvent = new EventEmitter();
  @Input() iconPath: string = '';
  @Input() iconAlt: string = '';
  buttonWasClicked($event: Event) {
    this.clickedButtonEvent.emit($event);
  }
}
