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
        icon: `
                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                  <path d="M7.89926 4.99988C10.7371 8.01919 12.156 11.9407 12.156 16.7644C12.156 23.9999 5.9995 29.5381 4.969 33.4999C4.282 36.1411 3.95884 39.3077 3.9995 42.9999" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                  <path d="M39.256 4.99988C36.4182 8.01919 34.9992 11.9407 34.9992 16.7644C34.9992 23.9999 41.1558 29.5381 42.1863 33.4999C42.8733 36.1411 43.1964 39.3077 43.1558 42.9999" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                  <path d="M6.24414 30.8368C12.7693 34.9666 18.6949 37.0316 24.0211 37.0316C29.3472 37.0316 34.9799 34.9666 40.9192 30.8368" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                  <path d="M24 30.9999C25.3807 30.9999 26.5 29.8806 26.5 28.4999C26.5 27.1192 25.3807 25.9999 24 25.9999C22.6193 25.9999 21.5 27.1192 21.5 28.4999C21.5 29.8806 22.6193 30.9999 24 30.9999Z" fill="currentColor"/>
                </svg>
        `,
        title: 'Digestión Mejorada y Menor Inflamación',
        content:
          'El proceso de fermentación natural del pan de masa madre descompone parcialmente las proteínas del gluten y los carbohidratos complejos, haciéndolos más fáciles de digerir. Las bacterias beneficiosas y las enzimas presentes en la masa madre actúan como un "pre-digestivo" natural, reduciendo la carga sobre el sistema digestivo. Esto resulta en menor hinchazón, gases y molestias abdominales comparado con el pan comercial. Además, la fermentación lenta neutraliza los antinutrientes como el ácido fítico, permitiendo una mejor absorción de minerales esenciales.',
      },
      {
        icon: `
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="m17.355 20.131 2.616-.146.153-2.615-4.978-4.978-2.767 2.762z"/>
                  <path d="m10.236 1.607-1.553 1.553-2.016-2.016c-.715-.765-1.73-1.242-2.856-1.242-2.157 0-3.906 1.749-3.906 3.906 0 1.126.477 2.141 1.24 2.854l.002.002 2.017 2.016-1.553 1.553 1.967 1.967 1.663-1.664 11.532 11.531 3.653-.207 2.136 2.136 1.45-1.45-2.136-2.136.207-3.653-11.531-11.531 1.664-1.664zm10.3 18.948-3.266.186-11.112-11.112 3.453-3.453 11.112 11.112z"/>
                </svg>
   `,
        title: 'Índice Glucémico Más Bajo y Control de Azúcar',
        content:
          'El pan de masa madre tiene un índice glucémico significativamente menor que el pan convencional, lo que significa que libera azúcar en el torrente sanguíneo de manera más gradual y sostenida. Esta característica es especialmente beneficiosa para personas con diabetes o resistencia a la insulina, ya que evita los picos repentinos de glucosa en sangre. La fermentación ácida modifica la estructura del almidón, creando almidones resistentes que actúan de manera similar a la fibra, promoviendo una sensación de saciedad más duradera y un mejor control del apetito.',
      },
      {
        icon: `
<svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" d="M13,8.17h0A4.79,4.79,0,0,0,8.17,3.38h0A4.78,4.78,0,0,0,3.38,8.17h0A12.44,12.44,0,0,0,15.83,20.62h0a4.78,4.78,0,0,0,4.79-4.79h0A4.79,4.79,0,0,0,15.83,11h0A2.88,2.88,0,0,1,13,8.17Z"/>
  <circle fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" cx="5.29" cy="9.13" r="1.92"/>
  <circle fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" cx="15.83" cy="12.96" r="1.92"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="8.17" y1="12.96" x2="10.08" y2="12.96"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="9.13" y1="8.17" x2="11.04" y2="8.17"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="11.04" y1="16.79" x2="12.96" y2="16.79"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="14.88" y1="17.75" x2="16.79" y2="17.75"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="8.17" y1="0.5" x2="8.17" y2="3.38"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="20.63" y1="16.79" x2="23.5" y2="16.79"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="7.21" y1="16.79" x2="4.81" y2="19.19"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="13.92" y1="10.08" x2="16.31" y2="7.69"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="19.67" y1="12.96" x2="21.58" y2="11.04"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="11.04" y1="4.33" x2="12.96" y2="2.42"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="13.92" y1="20.63" x2="13.92" y2="23.5"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="3.38" y1="8.17" x2="0.5" y2="8.17"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="4.33" y1="5.29" x2="2.42" y2="3.38"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="18.71" y1="19.67" x2="21.58" y2="22.54"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="1.46" y1="14.88" x2="4.33" y2="12"/>
  <line fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.92px" x1="9.13" y1="22.54" x2="12" y2="19.67"/>
</svg>
`,
        title: 'Probióticos Naturales y Salud Intestinal',
        content:
          'La masa madre es rica en bacterias beneficiosas y levaduras naturales que actúan como probióticos, contribuyendo a mantener un microbioma intestinal saludable. Estos microorganismos ayudan a fortalecer el sistema inmunológico, mejoran la síntesis de vitaminas del complejo B y vitamina K, y crean un ambiente intestinal favorable para la digestión. Un intestino saludable está directamente relacionado con mejor estado de ánimo, mayor energía y una respuesta inmune más eficiente. La diversidad microbiana del pan de masa madre también puede ayudar a reducir el riesgo de infecciones intestinales y mejorar la regularidad digestiva.',
      },
      {
        icon: `
<svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.555,6.832a1,1,0,0,0-1.11-1.664L17.928,6.846,13,4.382V2a1,1,0,0,0-2,0V4.382L6.072,6.846,3.555,5.168a1,1,0,0,0-1.11,1.664L5,8.535v6.93l-2.555,1.7a1,1,0,0,0,1.11,1.664l2.517-1.678L11,19.618V22a1,1,0,0,0,2,0V19.618l4.928-2.464,2.517,1.678a1,1,0,0,0,1.11-1.664L19,15.465V8.535ZM17,15.382l-5,2.5-5-2.5V8.618l5-2.5,5,2.5Z"/>
</svg>
`,
        title: 'Mayor Biodisponibilidad de Nutrientes',
        content:
          'El proceso de fermentación prolongada del pan de masa madre aumenta significativamente la biodisponibilidad de vitaminas y minerales. Las enzimas producidas durante la fermentación descomponen los fitatos y otros compuestos que normalmente impiden la absorción de nutrientes como hierro, zinc, magnesio y calcio. Además, la fermentación incrementa los niveles de vitaminas del complejo B, especialmente B1, B6, B12 y ácido fólico. El resultado es un pan más nutritivo que no solo alimenta, sino que también optimiza la absorción de nutrientes esenciales, contribuyendo a una mejor salud ósea, función neurológica y producción de energía celular.',
      },
      {
        icon: `
<svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="m12 1.316c-5.901 0-10.684 4.783-10.684 10.684s4.783 10.684 10.684 10.684 10.684-4.783 10.684-10.684c-.012-5.896-4.788-10.672-10.683-10.684h-.001zm0 22.297c-6.414 0-11.613-5.199-11.613-11.613s5.199-11.613 11.613-11.613 11.613 5.199 11.613 11.613v.015c0 6.405-5.192 11.597-11.597 11.597-.005 0-.011 0-.016 0h.001z"/>
  <path d="m12 24c-6.614-.034-11.966-5.386-12-11.997v-.003c0-6.627 5.373-12 12-12s12 5.373 12 12c-.034 6.614-5.386 11.966-11.997 12zm0-23.226c-6.2 0-11.226 5.026-11.226 11.226s5.026 11.226 11.226 11.226 11.226-5.026 11.226-11.226c-.004-6.198-5.028-11.221-11.225-11.226zm0 22.297c-6.114 0-11.071-4.957-11.071-11.071s4.957-11.071 11.071-11.071c6.114 0 11.071 4.957 11.071 11.071s-4.957 11.071-11.071 11.071zm0-21.368c-5.687 0-10.297 4.61-10.297 10.297s4.61 10.297 10.297 10.297 10.297-4.61 10.297-10.297c-.026-5.676-4.62-10.271-10.294-10.297h-.002z"/>
  <path d="m9.677 9.91c0 1.154-.936 2.09-2.09 2.09s-2.09-.936-2.09-2.09.936-2.09 2.09-2.09h.009c1.15 0 2.082.932 2.082 2.082v.009z"/>
  <path d="m18.581 9.91c0 1.154-.936 2.09-2.09 2.09s-2.09-.936-2.09-2.09c0-.003 0-.006 0-.009 0-1.15.932-2.082 2.082-2.082h.009c1.145.023 2.067.945 2.09 2.088v.002z"/>
  <path d="m17.497 14.4c-.041-.037-.095-.059-.155-.059s-.114.022-.155.059c-.111.035-.198.121-.232.23l-.001.002c-.697 1.394-2.71 2.323-4.877 2.323s-4.258-.929-4.877-2.323l-.232-.232h-.31c-.16.082-.268.246-.268.436 0 .066.013.129.037.187l-.001-.003c.776 1.291 2.037 2.223 3.525 2.548l.036.007c.077 2.09 1.006 3.716 2.168 3.716s2.09-1.626 2.168-3.716c1.524-.332 2.785-1.264 3.548-2.53l.014-.025c-.055-.253-.193-.467-.385-.618l-.002-.002z"/>
</svg>
`,
        title: 'Sabor y Textura Inigualables',
        content:
          'La fermentación natural desarrolla una complejidad de sabores que no se encuentra en el pan comercial. Disfruta de una corteza crujiente y caramelizada, una miga tierna y alveolada, y un sabor profundo con notas ácidas y a nuez. Cada pan es una obra de arte culinaria que eleva cualquier comida y deleita el paladar, haciendo de cada bocado una experiencia memorable.',
      },
    ];

    this.benefits = rawBenefits.map((b) => ({
      ...b,
      icon: this.sanitizer.bypassSecurityTrustHtml(b.icon as string),
    }));
  }
}
