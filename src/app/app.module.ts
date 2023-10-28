import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CounterModule } from './counter/counter.module';
import { HeoresModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule, CounterModule, HeoresModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
