import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panes',
  standalone: true,
  imports: [CommonModule],
  providers: [Productos],
  templateUrl: './panes.html',
  styleUrl: './panes.css'
})
export class Panes implements OnInit {

  panes: any[] = []; // Propiedad para almacenar los panes

  constructor(private productosService: Productos) { }

  ngOnInit(): void {
    this.panes = this.productosService.getPanes();
    
  }
}
