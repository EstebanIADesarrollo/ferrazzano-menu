import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  imports: [],
  templateUrl: './beneficios.html',
  styleUrl: './beneficios.css',
})
export class Beneficios {
  benefits = [
    {
      icon: 'assets/iconos/ferrazzano-logo2.png',
      title: 'Digestión Mejorada y Menor Inflamación',
      content:
        'El proceso de fermentación natural del pan de masa madre descompone parcialmente las proteínas del gluten y los carbohidratos complejos, haciéndolos más fáciles de digerir. Las bacterias beneficiosas y las enzimas presentes en la masa madre actúan como un "pre-digestivo" natural, reduciendo la carga sobre el sistema digestivo. Esto resulta en menor hinchazón, gases y molestias abdominales comparado con el pan comercial. Además, la fermentación lenta neutraliza los antinutrientes como el ácido fítico, permitiendo una mejor absorción de minerales esenciales.',
    },
    {
      icon: 'assets/iconos/ferrazzano-logo2.png',
      title: 'Índice Glucémico Más Bajo y Control de Azúcar',
      content:
        'El pan de masa madre tiene un índice glucémico significativamente menor que el pan convencional, lo que significa que libera azúcar en el torrente sanguíneo de manera más gradual y sostenida. Esta característica es especialmente beneficiosa para personas con diabetes o resistencia a la insulina, ya que evita los picos repentinos de glucosa en sangre. La fermentación ácida modifica la estructura del almidón, creando almidones resistentes que actúan de manera similar a la fibra, promoviendo una sensación de saciedad más duradera y un mejor control del apetito.',
    },
    {
      icon: 'assets/iconos/ferrazzano-logo2.png',
      title: 'Probióticos Naturales y Salud Intestinal',
      content:
        'La masa madre es rica en bacterias beneficiosas y levaduras naturales que actúan como probióticos, contribuyendo a mantener un microbioma intestinal saludable. Estos microorganismos ayudan a fortalecer el sistema inmunológico, mejoran la síntesis de vitaminas del complejo B y vitamina K, y crean un ambiente intestinal favorable para la digestión. Un intestino saludable está directamente relacionado con mejor estado de ánimo, mayor energía y una respuesta inmune más eficiente. La diversidad microbiana del pan de masa madre también puede ayudar a reducir el riesgo de infecciones intestinales y mejorar la regularidad digestiva.',
    },
    {
      icon: 'assets/iconos/ferrazzano-logo2.png',
      title: 'Mayor Biodisponibilidad de Nutrientes',
      content:
        'El proceso de fermentación prolongada del pan de masa madre aumenta significativamente la biodisponibilidad de vitaminas y minerales. Las enzimas producidas durante la fermentación descomponen los fitatos y otros compuestos que normalmente impiden la absorción de nutrientes como hierro, zinc, magnesio y calcio. Además, la fermentación incrementa los niveles de vitaminas del complejo B, especialmente B1, B6, B12 y ácido fólico. El resultado es un pan más nutritivo que no solo alimenta, sino que también optimiza la absorción de nutrientes esenciales, contribuyendo a una mejor salud ósea, función neurológica y producción de energía celular.',
    },
    {
      icon: 'assets/iconos/ferrazzano-logo2.png',
      title: 'Sabor y Textura Inigualables',
      content: 'La fermentación natural desarrolla una complejidad de sabores que no se encuentra en el pan comercial. Disfruta de una corteza crujiente y caramelizada, una miga tierna y alveolada, y un sabor profundo con notas ácidas y a nuez. Cada pan es una obra de arte culinaria que eleva cualquier comida y deleita el paladar, haciendo de cada bocado una experiencia memorable.'
    }
  ];
}
