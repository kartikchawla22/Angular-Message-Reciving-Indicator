import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from '../Components/button/button.component';
import { CoffeeMaterialModule } from '../material.module';
import { BadgeComponent } from '../Components/badge/badge.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CoffeeMaterialModule],
  declarations: [AppComponent, ButtonComponent, BadgeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
