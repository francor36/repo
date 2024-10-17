import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotosComponent } from './motos/motos.component';
import { InicioComponent } from "./inicio/inicio.component";
import { NosotrosComponent } from './nosotros/nosotros.component';

export const routes: Routes = [
   
  {
    path:"",component:InicioComponent
  },
    {
      path:"inicio",component:InicioComponent
    },
    {
      path:"motos",component:MotosComponent
    },
    {
      path:"nosotros",component:NosotrosComponent
    }
  
    ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }


