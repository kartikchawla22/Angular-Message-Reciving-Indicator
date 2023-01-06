import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BadgeService } from '../../Services/badge.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  constructor(private _badgeSerice: BadgeService) {}
  @Input() totalMessages: number = 0;

  onBadgeClick() {
    this._badgeSerice.resetCounter();
  }
}
