import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterLinkWithHref,} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatSlideToggleModule }  from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterLinkWithHref,RouterModule,CommonModule,MatSlideToggleModule,MatIconModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
