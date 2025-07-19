import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-beneficios',
  imports: [],
  templateUrl: './beneficios.html',
  styleUrl: './beneficios.css',
})
export class Beneficios implements OnInit {
  benefits: { icon: SafeHtml; title: string; content: string }[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const rawBenefits = [
      {
        icon: '<svg  viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M7.89926 4.99988C10.7371 8.01919 12.156 11.9407 12.156 16.7644C12.156 23.9999 5.9995 29.5381 4.969 33.4999C4.282 36.1411 3.95884 39.3077 3.9995 42.9999" stroke-width="4" stroke-linecap="round"/><path d="M39.256 4.99988C36.4182 8.01919 34.9992 11.9407 34.9992 16.7644C34.9992 23.9999 41.1558 29.5381 42.1863 33.4999C42.8733 36.1411 43.1964 39.3077 43.1558 42.9999" stroke-width="4" stroke-linecap="round"/><path d="M6.24414 30.8368C12.7693 34.9666 18.6949 37.0316 24.0211 37.0316C29.3472 37.0316 34.9799 34.9666 40.9192 30.8368" stroke-width="4" stroke-linecap="round"/><path d="M24 30.9999C25.3807 30.9999 26.5 29.8806 26.5 28.4999C26.5 27.1192 25.3807 25.9999 24 25.9999C22.6193 25.9999 21.5 27.1192 21.5 28.4999C21.5 29.8806 22.6193 30.9999 24 30.9999Z"/></svg>',
        title: 'Digestión Mejorada y Menor Inflamación',
        content:
          'El proceso de fermentación natural del pan de masa madre descompone parcialmente las proteínas del gluten y los carbohidratos complejos, haciéndolos más fáciles de digerir. Las bacterias beneficiosas y las enzimas presentes en la masa madre actúan como un "pre-digestivo" natural, reduciendo la carga sobre el sistema digestivo. Esto resulta en menor hinchazón, gases y molestias abdominales comparado con el pan comercial. Además, la fermentación lenta neutraliza los antinutrientes como el ácido fítico, permitiendo una mejor absorción de minerales esenciales.',
      },
      {
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/></svg>',
        title: 'Índice Glucémico Más Bajo y Control de Azúcar',
        content:
          'El pan de masa madre tiene un índice glucémico significativamente menor que el pan convencional, lo que significa que libera azúcar en el torrente sanguíneo de manera más gradual y sostenida. Esta característica es especialmente beneficiosa para personas con diabetes o resistencia a la insulina, ya que evita los picos repentinos de glucosa en sangre. La fermentación ácida modifica la estructura del almidón, creando almidones resistentes que actúan de manera similar a la fibra, promoviendo una sensación de saciedad más duradera y un mejor control del apetito.',
      },
      {
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/></svg>',
        title: 'Probióticos Naturales y Salud Intestinal',
        content:
          'La masa madre es rica en bacterias beneficiosas y levaduras naturales que actúan como probióticos, contribuyendo a mantener un microbioma intestinal saludable. Estos microorganismos ayudan a fortalecer el sistema inmunológico, mejoran la síntesis de vitaminas del complejo B y vitamina K, y crean un ambiente intestinal favorable para la digestión. Un intestino saludable está directamente relacionado con mejor estado de ánimo, mayor energía y una respuesta inmune más eficiente. La diversidad microbiana del pan de masa madre también puede ayudar a reducir el riesgo de infecciones intestinales y mejorar la regularidad digestiva.',
      },
      {
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/></svg>',
        title: 'Mayor Biodisponibilidad de Nutrientes',
        content:
          'El proceso de fermentación prolongada del pan de masa madre aumenta significativamente la biodisponibilidad de vitaminas y minerales. Las enzimas producidas durante la fermentación descomponen los fitatos y otros compuestos que normalmente impiden la absorción de nutrientes como hierro, zinc, magnesio y calcio. Además, la fermentación incrementa los niveles de vitaminas del complejo B, especialmente B1, B6, B12 y ácido fólico. El resultado es un pan más nutritivo que no solo alimenta, sino que también optimiza la absorción de nutrientes esenciales, contribuyendo a una mejor salud ósea, función neurológica y producción de energía celular.',
      },
      {
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/></svg>',
        title: 'Sabor y Textura Inigualables',
        content:
          'La fermentación natural desarrolla una complejidad de sabores que no se encuentra en el pan comercial. Disfruta de una corteza crujiente y caramelizada, una miga tierna y alveolada, y un sabor profundo con notas ácidas y a nuez. Cada pan es una obra de arte culinaria que eleva cualquier comida y deleita el paladar, haciendo de cada bocado una experiencia memorable.'
      }
    ];

    this.benefits = rawBenefits.map(b => ({
      ...b,
      icon: this.sanitizer.bypassSecurityTrustHtml(b.icon as string)
    }));
  }
}
