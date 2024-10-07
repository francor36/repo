import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotosComponent } from './motos/motos.component';
import { InicioComponent } from "./inicio/inicio.component";

export const routes: Routes = [
   
    {
      path:"",component:InicioComponent
    },
    {
      path:"motos",component:MotosComponent
    },
  
    ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }


