import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  private productos = [
    {
      "nombre": "Pan de Campo",
      "descripcion": "Pan rústico con corteza crocante y miga suave, ideal para acompañar comidas.",
      "peso": 500,
      "precio": 10000,
      "nombre_de_imagen": "pan_de_campo.jpeg"
    },
    {
      "nombre": "Pan de Chocolate",
      "descripcion": "Pan con chips de chocolate semiamargo, perfecto para desayunos o meriendas.",
      "peso": 500,
      "precio": 13000,
      "nombre_de_imagen": "pan_de_chocolate.jpeg"
    },
    {
      "nombre": "Pan de Arándanos",
      "descripcion": "Pan artesanal con arándanos deshidratados, suave y ligeramente dulce.",
      "peso": 500,
      "precio": 14000,
      "nombre_de_imagen": "pan_de_arandanos.png"
    },
    {
      "nombre": "Pan Multicereal",
      "descripcion": "Pan saludable elaborado con mezcla de cereales y semillas, fuente de fibra.",
      "peso": 500,
      "precio": 15000,
      "nombre_de_imagen": "pan_multicereal.png"
    },
    {
      "nombre": "Pan Bagette Pequeño",
      "descripcion": "Bagette personal con corteza crujiente y miga aireada.",
      "peso": 200,
      "precio": 3000,
      "nombre_de_imagen": "pan_bagette.jpeg"
    },
    {
      "nombre": "Pan Bagette Grande",
      "descripcion": "Bagette tradicional de gran tamaño, ideal para compartir.",
      "peso": 300,
      "precio": 5500,
      "nombre_de_imagen": "pan_bagette.jpeg"
    },
    {
      "nombre": "Hogaza Queen",
      "descripcion": "Pan rústico con corteza crocante y miga suave, de mas de una libra ideal para compartir.",
      "peso": 800,
      "precio": 15000,
      "nombre_de_imagen": "hogaza_queen.jpeg"
    }
  ];
  
  getProductos() {
    return this.productos;
  }
}
