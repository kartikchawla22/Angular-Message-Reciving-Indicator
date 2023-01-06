import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  private _counterSubject$: Subscription;
  counter$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  startrecieving() {
    this._counterSubject$ = timer(0, 300).subscribe(() => {
      this.counter$.next(this.counter$.value + 1);
    });
  }
  stopRecieving() {
    this._counterSubject$.unsubscribe();
  }
  resetCounter() {
    this.counter$.next(0);
  }
}
