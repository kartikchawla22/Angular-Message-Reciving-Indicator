import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() isDisabled: boolean = false;
  @Output() buttonClickEmitter: EventEmitter<any> = new EventEmitter();

  buttonClick(): void {
    this.buttonClickEmitter.emit();
  }
}
