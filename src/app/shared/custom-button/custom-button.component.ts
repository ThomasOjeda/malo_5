import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Output() clickedButtonEvent = new EventEmitter();
  @Input() iconPath: string = '';
  @Input() iconAlt: string = '';
  @Input() text: string = '';
  @Input() buttonType: string = '';

  displayText = false;
  displayIcon = false;

  ngOnInit(): void {
    if (this.buttonType == 'text' || this.buttonType == 'text&icon')
      this.displayText = true;
    if (this.buttonType == 'icon' || this.buttonType == 'text&icon')
      this.displayIcon = true;
  }
  buttonWasClicked($event: Event) {
    this.clickedButtonEvent.emit($event);
  }
}
