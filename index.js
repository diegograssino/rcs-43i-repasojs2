// Inyeccion de codigo
// Seleccion de elementos

// Seleccion por id
// const elemento =
//   document.getElementById('elemento');\

// Seleccion por tag o por clase
// const elemento =
//   document.getElementsByClassName('clase');
// const elemento = document.querySelector('h5');

// Seleccion multiple de elementos del DOM
// const elemento = document.querySelectorAll(
//   'h5#elemento.clase'
// );

// console.log(elemento);
// console.log(elemento[1]);

// Formas de inyectar codigo

// Generando en JS todos los elementos del DOM
// const elementoCreado =
//   document.createElement('div');
// elementoCreado.innerText = 'Elemento creado';
// elementoCreado.style.backgroundColor = 'red';
// elementoCreado.classList = 'clase';

// const inject = document.getElementById(
//   'lugar-para-inyectar'
// );
// inject.appendChild(elementoCreado);

// console.log(elementoCreado.classList);

// const inject = document.getElementById('inject');
// const roberto = 'roberto sanchez';
// inject.innerHTML += /* HTML */ `<p
//     class="clase-inyectada"
//   >
//     Texto inyectado ${roberto}
//   </p>
//   <p></p>`;

// Funcion flecha

// Sintaxis pre ES6
// function prueba1(text) {
//   console.log(text);
// }

// prueba1('prueba1');
// prueba1('prueba1 did it again');
// Version anonima

// Sintaxis post ES6 o funcion flecha
// const pruebaFlecha = text => console.log(text);
// const pruebaFlecha2 = text => {
//   console.log(text);
//   console.log(
//     'Uso un bloque de codigo igual que function'
//   );
// };

// pruebaFlecha('pruebaFlecha');
// pruebaFlecha('pruebaFlecha did it again');

// pruebaFlecha2('pruebaFlecha');
// pruebaFlecha2('pruebaFlecha did it again');

// IIFE - funcion anonima auto ejecutada
// (() => {
//   console.log(
//     'Esta es una IIFE, se ejecuta una sola vez y todo muere adentro al terminar, incluye en su sintaxis su auto ejecucion y el codigo que ejecuta'
//   );
// })();

// const inject = document.getElementById('inject');
// inject.addEventListener('mouseleave', () =>
//   roberto()
// );

// const roberto = () =>
//   console.log(
//     'Hola soy Roberto y soy una funion flecha declarada'
//   );

// Operadores logicos

// const verdadero = true;
// const falso = false;
// // AND (todas tienen que ser verdaderas para que sea verdadera)
// console.log(verdadero && (verdadero || falso));

// // OR (al menos una tiene que ser verdadera para que sea verdadera)
// console.log(verdadero || falso || falso);

// // NOT
// console.log(!falso);
