import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutes, routes } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';
import {MaterialModule} from  './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
@NgModule({
    declarations: [
      AppComponent,
      MenuComponent,
      InicioComponent,
      
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
    providers: [provideRouter(routes)],
    bootstrap: [AppComponent]
  })
  export class AppModule { }