import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  private panes = [
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
      "peso": 180,
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
  
  getPanes() {
    return this.panes;
  }

  private pizzas = [
    {
      "nombre": "Margarita",
      "ingredientes": "Pizza de masa madre con salsa de tomate artesanal, queso, aceite de olivas y albahaca.",
      "precio": 20000,
      "nombre_de_imagen": "pizza_margarita.png"
    },
     {
      "nombre": "Pepperoni",
      "ingredientes": "Pizza de masa madre con pepperoni, queso, aceite de olivas  y salsa de tomate artesanal.",
      "precio": 22000,
      "nombre_de_imagen": "pizza_margarita.png"
      // "nombre_de_imagen": "pizza_pepperoni.jpeg"
    },
    {
      "nombre": "Pollo con Champiñones",
      "ingredientes": "Pizza de masa madre con trozos de pollo, champiñones, aceite de olivas y salsa de tomate artesanal.",
      "precio": 24000,
      "nombre_de_imagen": "pizza_margarita.png"
      // "nombre_de_imagen": "pizza_pollo_champinones.jpeg"
    },
    {
      "nombre": "Ciruela y Tocineta",
      "ingredientes": "Pizza de masa madre con ciruelas, tocineta, un toque agridulce de vinagre balsámico, aceite de olivas y salsa de ciruelas",
      "precio": 24000,
      "nombre_de_imagen": "pizza_margarita.png"
      // "nombre_de_imagen": "pizza_ciruela_tocineta.jpeg"
    },
    
    {
      "nombre": "Mexicana",
      "ingredientes": "Pizza de masa madre con carne molida, jalapeños, pico de gallo, aceite de olivas  y queso.",
      "precio": 25000,
      "nombre_de_imagen": "pizza_margarita.png"
      // "nombre_de_imagen": "pizza_mexicana.jpeg"
    },
    {
      "nombre": "Pesto",
      "ingredientes": "Pizza de masa madre con salsa pesto, mozzarella de bufala, tomate cherry, aceite de olivas, rúgula y queso.",
      "precio": 24000,
      "nombre_de_imagen": "pizza_margarita.png"
      // "nombre_de_imagen": "pizza_pesto.jpeg"
    },
    {
      "nombre": "Queso con Bocadillo",
      "ingredientes": "Pizza de masa madre con queso, aceite de olivas y trozos de bocadillo.",
      "precio": 18000,
      "nombre_de_imagen": "pizza_margarita.png"
      // "nombre_de_imagen": "pizza_queso_bocadillo.jpeg"
    }
  ];

  getPizzas() {
    return this.pizzas;
  }
}
