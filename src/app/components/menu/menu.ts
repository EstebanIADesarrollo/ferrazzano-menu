import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  providers: [Productos],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {

  productos: any[] = []; // Propiedad para almacenar los productos

  constructor(private productosService: Productos) { }

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
    
  }
}
