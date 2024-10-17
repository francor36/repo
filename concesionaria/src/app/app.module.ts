import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutes, routes } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { InicioComponent } from './inicio/inicio.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import {MaterialModule} from  './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MotosComponent } from './motos/motos.component';
import { provideRouter } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PieComponent } from './pie/pie.component';


@NgModule({
    declarations: [

    ],
    imports: [

      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutes,
      LayoutModule,
      MaterialModule,
      BrowserAnimationsModule,
      MatSlideToggleModule,
      MotosComponent,
      NosotrosComponent,
      PieComponent
    ],
    providers: [provideRouter(routes)],
    bootstrap: []
  })
  export class AppModule { }