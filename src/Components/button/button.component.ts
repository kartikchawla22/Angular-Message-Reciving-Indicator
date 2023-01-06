import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title = '';
  @Input() type = '';
  @Output() buttonClickEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  buttonClick() {
    this.buttonClickEmitter.emit();
  }
}
