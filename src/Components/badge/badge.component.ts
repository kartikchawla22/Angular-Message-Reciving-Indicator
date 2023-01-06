import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BadgeService } from '../../Services/badge.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  totalMessages$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private _badgeSerice: BadgeService) {
    this.totalMessages$ = this._badgeSerice.counter$;
  }

  onBadgeClick(): void {
    this._badgeSerice.resetCounter();
  }
}
