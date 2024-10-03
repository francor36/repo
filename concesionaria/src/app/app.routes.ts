import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from "./inicio/inicio.component";
import { MenuComponent } from './menu/menu.component';


export const routes: Routes = [
   
    {
      path:"",component:InicioComponent
    },
    {
      path:"",component:MenuComponent
    }
    ];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }


