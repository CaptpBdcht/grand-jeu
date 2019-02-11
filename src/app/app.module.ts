import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { GrandJeuComponent } from './grand-jeu/grand-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandJeuComponent
  ],
  imports: [
    AccordionModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
