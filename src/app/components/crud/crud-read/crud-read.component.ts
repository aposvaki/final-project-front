import { Component, inject } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-read',
  standalone: true,
  imports: [
    CommonModule,
    CrudNavbarComponent, 
    MatCardModule, 
    MatButtonModule],
  templateUrl: './crud-read.component.html',
  styleUrl: './crud-read.component.css'
})
export class CrudReadComponent {
  productService = inject(ProductService);

  products: Product[] = [];

  ngOnInit(): void {
    this.refreshProduct();
  }

  refreshProduct() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
      data.forEach(product => {
        console.log(product.productName);
        console.log(product.shortDesc);
    })
      
    });
    
  }
}
