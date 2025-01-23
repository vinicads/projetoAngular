import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp2Component } from './comp2/comp2.component';
import { CardComponent } from './components/card/card.component';
import { Card2Component } from './components/card2/card2.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp2Component,
    CardComponent,
    Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
