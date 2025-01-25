import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { Card2Component } from '../components/card2/card2.component';
import { CardButtonComponent } from '../components/card-button/card-button.component';
import { Card2ButtonComponent } from '../components/card2-button/card2-button.component';



@NgModule({
  declarations: [
    CardComponent,
    Card2Component,
    CardButtonComponent,
    Card2ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    Card2Component,
    // CardButtonComponent,
    // Card2ButtonComponent
  ]
})
export class CardsModule { }
