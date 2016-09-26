import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CircleComponent } from './circle.component';
import { SquareComponent } from './square.component';
import {TriangleComponent } from './triangle.component';
import {NavComponent } from './nav.component';
import { AppComponent }  from './app.component';
import {routing} from './app.routing';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, CircleComponent, TriangleComponent, SquareComponent, NavComponent],
  bootstrap: [ AppComponent, NavComponent ]
})
export class AppModule { }
