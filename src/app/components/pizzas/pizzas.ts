import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
import { CommonModule } from '@angular/common';

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

  constructor(private productosService: Productos) { }

  ngOnInit(): void {
    this.pizzas = this.productosService.getPizzas();
    console.log('Pizzas cargadas:', this.pizzas);
  }
}
