import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  counter = 0;
  startrecieving() {
    this.counter = this.counter + 1;
  }
  stopRecieving() {
    console.log('stoped');
  }
  resetCounter() {
    this.counter = 0;
  }
}
