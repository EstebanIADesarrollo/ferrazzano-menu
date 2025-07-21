import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProductModal } from '../product-modal/product-modal';

@Component({
  selector: 'app-pizzas',
  standalone: true,
  imports: [CommonModule],
  providers: [Productos],
  templateUrl: './pizzas.html',
  styleUrl: './pizzas.css'
})
export class Pizzas implements OnInit {

  pizzas: any[] = [];

  constructor(private productosService: Productos, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pizzas = this.productosService.getPizzas();
  }

  openProductModal(pizza: any): void {
    this.dialog.open(ProductModal, {
      data: pizza
    });
  }
}
