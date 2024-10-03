import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutes } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { InicioComponent } from './inicio/inicio.component';

import { AppComponent } from './app.component';
import {MaterialModule} from  './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MotosComponent } from './motos/motos.component';



@NgModule({
    declarations: [
      AppComponent,
      MenuComponent,
      InicioComponent,
      MotosComponent,
      
    ],
    imports: [

      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutes,
      LayoutModule,
      MaterialModule,
      BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }