import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterLinkWithHref,} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterLinkWithHref,RouterModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
