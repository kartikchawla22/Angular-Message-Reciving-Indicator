import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  exports: [MatButtonModule, MatIconModule, MatBadgeModule],
})
export class CoffeeMaterialModule {}
