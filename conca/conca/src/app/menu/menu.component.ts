import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioComponent} from "../inicio/inicio.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink,RouterOutlet, InicioComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
