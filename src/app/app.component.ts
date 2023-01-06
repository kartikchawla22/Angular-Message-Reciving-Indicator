import { Component } from '@angular/core';
import { BadgeService } from '../Services/badge.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _badgeSerice: BadgeService) {}
  isRecieving: boolean = false;

  onStartRecieveClick() {
    this._badgeSerice.startrecieving();
    this.isRecieving = true;
  }

  onStopRecieveClick() {
    this._badgeSerice.stopRecieving();
    this.isRecieving = false;
  }
}
