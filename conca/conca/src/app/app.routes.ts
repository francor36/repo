import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component'
import { InicioComponent } from "./inicio/inicio.component";
export const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: 'incio', component: InicioComponent}
    
];
