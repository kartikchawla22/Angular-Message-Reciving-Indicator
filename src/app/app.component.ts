import { Component } from '@angular/core';
import { BadgeService } from '../Services/badge.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _badgeSerice: BadgeService) {}

  onStartRecieveClick() {
    this._badgeSerice.startrecieving();
  }

  onStopRecieveClick() {
    this._badgeSerice.stopRecieving();
  }
}
