import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductModal } from '../components/product-modal/product-modal';

@Component({
  selector: 'app-modal-launcher',
  standalone: true,
  imports: [],
  template: '', // No necesitamos HTML para este componente
  styleUrl: './modal-launcher.css'
})
export class ModalLauncherComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(ProductModal, {
      data: { nombre: 'Producto de Prueba', descripcion: 'Esta es una descripción de prueba para el modal.', precio: 100, nombre_de_imagen: 'pizza_margarita.png' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/pizzas']); // Navegar de vuelta a pizzas al cerrar el modal
    });
  }
}