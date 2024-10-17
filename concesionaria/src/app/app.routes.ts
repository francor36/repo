import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotosComponent } from './motos/motos.component';
import { InicioComponent } from "./inicio/inicio.component";
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

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
      path:"sobrenosotros",component:SobreNosotrosComponent
    },
  
    ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }


