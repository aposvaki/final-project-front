import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, 
    RouterOutlet,
    MenuCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-project-front';
}
