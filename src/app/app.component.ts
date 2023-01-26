import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Proyecto Angular';
}



//   primerNumero = 2;
//   segundoNumero = 3;

//   tercerNumero = 5;
//   cuartoNumero = 8;

//   constructor() {

//     console.log('Constructor');
//     let a, b, d: number;
//     let nombre: string;

//     a = 5;
//     b = 6;
//     d = 9;

//     nombre = 'El resultado de mi función es '

//     const resultadoOperacion = this.matematicas(a, b, 6, d);
//     const resultadoSegundaOperacion = this.matematicas(this.primerNumero, 5, this.tercerNumero, this.cuartoNumero);

//     console.log(nombre + resultadoOperacion);
//     console.log(nombre + resultadoSegundaOperacion); 

//   }
//   public matematicas(a: number, b: number, c: number, d: number) {
//     return a * b - c - d;
//   }
// }

ngOnInit() {
  
}
