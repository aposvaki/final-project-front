import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuCategories } from 'src/app/shared/interfaces/menu-categories';

@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.css'
})
export class MenuCategoryComponent {
menu: MenuCategories[] = [
  {text: 'Products', routerLink: 'edit-products'}
]
}
