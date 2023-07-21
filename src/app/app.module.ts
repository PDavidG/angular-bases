import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { heroeListModule } from './heroes/heroe-list.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CounterModule,
    heroeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
